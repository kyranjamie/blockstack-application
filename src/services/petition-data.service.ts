import { Petition } from 'models'
import { delay } from 'helpers';

const petitions: Petition[] = [
  {
    name: 'Revoke Article 50 (Brexit)',
    description: 'Brexit looks certain to divide the United Kingdom, and send the country into economic turmoil. Revoke article 50 now.',
    id: 1,
    labels: [{ text: 'Political', color: 'orange' }],
    hasSigned: false
  },
  {
    name: 'Lower voting age to 16',
    id: 2,
    hasSigned: true,
    labels: [{ text: 'Political', color: 'orange' }],
    description: 'Teenagers are both intelligent and informed enough to decide their own political future. Let them. Sign here to show your support for a lowered voting age.'
  },
  {
    name: 'Free Hat',
    id: 3,
    hasSigned: false,
    labels: [{ text: 'Legal', color: 'purple' }, { text: 'Justice', color: 'blue' }],
    description: 'Despite being a fictional charachter from a hit animated television programme, sign the petition now to show your support to FREE HAT'
  },
  {
    name: 'Kill the Touchbar on the Macbook Pro',
    id: 4,
    hasSigned: false,
    labels: [{ text: 'Enterprise', color: 'magenta' }],
    description: 'Apple\'s introduction of the useless keyboard screen has its users in dismay. Sign here to support Apple\'s sunsetting of this gimmick of a "feature"'
  },
  {
    name: 'Allow alternate default browser on iOS',
    id: 5,
    hasSigned: false,
    labels: [{ text: 'Enterprise', color: 'magenta' }],
    description: 'Not all internet uses wish to be locked into Apple inferior browser. Disallowing a default browser on MacOS would be unacceptable. The same is true of Apple\'s mobile operating system. Sign here to support a more open web'
  }
]

const mockResponseTimeMs = 700

// const userSession = new blockstack.UserSession()

export const PetitionService = {
  getAllPetitions: () => delay(mockResponseTimeMs, petitions),

  signPetition: (petitionId: number) => delay(mockResponseTimeMs),
    // userSession.putFile('petition-' + petitionId + '.txt', '', { encrypt: false }),

  unsignPetition: (petitionId: number) => delay(mockResponseTimeMs)
}
