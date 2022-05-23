/* eslint-disable */
export type Methods = {
  /** category一件取得 */
  get: {
    status: 200

    /** Default Response */
    resBody: {
      uid: string
      name: string
    }
  }

  /** category編集 */
  put: {
    status: 200

    /** Default Response */
    resBody: {
      uid: string
      name: string
    }

    reqBody: {
      uid: string
      name: string
    }
  }

  /** category一件削除 */
  delete: {
    status: 200
  }
}
