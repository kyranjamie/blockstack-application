import React, { Component } from 'react'

import { Petition } from 'models'
import { PetitionService } from 'services/petition-data.service'

import PetitionList from './petition-list'

interface PetitionsState {
  petitions: Petition[];
  pendingSignings: number[]
}

export default class Petitions extends Component {
  state: PetitionsState = {
    petitions: [],
    pendingSignings: []
  }

  private updatePetition (petitionId: number, props: Partial<Petition>) {
    return this.state.petitions.map(
      petition => petition.id === petitionId
        ? { ...petition, ...props }
        : petition
    );
  }

  async componentDidMount () {
    const petitions = await PetitionService.getAllPetitions()
    this.setState({ petitions })
  }

  async signPetition (petitionId: number) {
    this.setState({ pendingSignings: [...this.state.pendingSignings, petitionId] })
    await PetitionService.signPetition(petitionId)
    this.setState({ pendingSignings: this.state.pendingSignings.filter(id => id !== petitionId) })
    this.setState({
      petitions: this.updatePetition(petitionId, { hasSigned: true })
    });
  }

  async unsignPetition (petitionId: number) {
    this.setState({ pendingSignings: [...this.state.pendingSignings, petitionId] })
    await PetitionService.unsignPetition(petitionId)
    this.setState({ pendingSignings: this.state.pendingSignings.filter(id => id !== petitionId) })
    this.setState({
      petitions: this.updatePetition(petitionId, { hasSigned: false })
    });
  }

  render () {
    return (
      <PetitionList
        petitions={this.state.petitions}
        pendingSignings={this.state.pendingSignings}
        onPetitionSign={this.signPetition.bind(this)}
        onPetitionUnsign={this.unsignPetition.bind(this)}
      />
    );
  }
}
