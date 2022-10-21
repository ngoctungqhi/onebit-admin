export type LoginResponse = { data: User }

export type User = {
  id: string
  accountId: string
  displayName: string
  avatarUrl: string | null
  createdById: string
  createdAt: string
  updatedById: string
  updatedAt: string
  version: number
}
