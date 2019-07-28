export interface Petition {
  name: string;
  id: number;
  hasSigned: boolean;
  description: string;
  labels?: readonly { text: string; color: string }[]
}
