/* eslint-disable */
export type Methods = {
  /** user一件取得 */
  get: {
    status: 200

    /** Default Response */
    resBody: {
      uid: string
      name: string
      posts: {
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

      profile: {
        uid: string
        biography: string
      } | null
    }
  }

  /** user編集 */
  put: {
    status: 200

    /** Default Response */
    resBody: {
      uid: string
      name: string
      posts: {
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

      profile: {
        uid: string
        biography: string
      } | null
    }

    reqBody: {
      uid: string
      name: string
      posts: {
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

      profile: {
        uid: string
        biography: string
      } | null
    }
  }

  /** user一件削除 */
  delete: {
    status: 200
  }
}
