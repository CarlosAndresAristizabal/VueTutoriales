import type IPersona from '@/interfaces/IPersona'
import { ref, type Ref } from 'vue'

class PostService {
  private readonly data: Ref<IPersona | null>
  private readonly currentUser: Ref<IPersona | null>

  constructor() {
    this.data = ref<IPersona | null>(null)
    this.currentUser = ref<IPersona | null>(null)
  }

  getData(): Ref<IPersona | null> {
    return this.data
  }
  getCurrentUser(): Ref<IPersona | null> {
    return this.currentUser
  }
  async fetchApi(): Promise<void> {
    try {
      const url = 'https://jsonplaceholder.typicode.com/users'
      const response = await fetch(url)
      this.data.value = (await response.json()) as IPersona
    } catch (error) {
      console.error('Error fetching user:', error)
    }
  }

  async fetchUserById(id: number): Promise<void> {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      this.currentUser.value = (await response.json()) as IPersona
    } catch (error) {
      console.error('Error fetching user:', error)
    }
  }
}
export const service = new PostService()
