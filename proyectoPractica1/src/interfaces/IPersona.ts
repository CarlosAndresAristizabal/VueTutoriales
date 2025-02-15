interface IPersona {
  id?: number
  name?: string
  username?: string
  email?: string
  address?: {
    city: string
  }
  phone?: string
  website?: string
}

export type { IPersona as default }
