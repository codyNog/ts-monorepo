/* eslint-disable */
export type Methods = {
  /** post新規作成 */
  post: {
    status: 200

    /** Default Response */
    resBody: {
      uid: string
      title: string
      description: string
      published: boolean
      body: string
      authorId: string
      categories: {
        uid: string
        name: string
      }[]
    }

    reqBody: {
      uid: string
      title: string
      description: string
      published: boolean
      body: string
      authorId: string
      categories: {
        uid: string
        name: string
      }[]
    }
  }

  /** post一覧取得 */
  get: {
    query?: {
      title?: string | undefined
      authorId?: string | undefined
    } | undefined

    status: 200
    /** Default Response */
    resBody: {
      uid: string
      title: string
      description: string
      published: boolean
      body: string
      authorId: string
      categories: {
        uid: string
        name: string
      }[]
    }[]
  }
}
