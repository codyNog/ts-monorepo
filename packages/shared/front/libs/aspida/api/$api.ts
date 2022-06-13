import type { AspidaClient, BasicHeaders } from 'aspida'
import { dataToURLString } from 'aspida'
import type { Methods as Methods0 } from './api/health'
import type { Methods as Methods1 } from './api/v1/categories'
import type { Methods as Methods2 } from './api/v1/categories/_uid@string'
import type { Methods as Methods3 } from './api/v1/posts'
import type { Methods as Methods4 } from './api/v1/posts/_uid@string'
import type { Methods as Methods5 } from './api/v1/users'
import type { Methods as Methods6 } from './api/v1/users/_uid@string'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '')
  const PATH0 = '/api/health'
  const PATH1 = '/api/v1/categories'
  const PATH2 = '/api/v1/posts'
  const PATH3 = '/api/v1/users'
  const GET = 'GET'
  const POST = 'POST'
  const PUT = 'PUT'
  const DELETE = 'DELETE'

  return {
    api: {
      health: {
        /**
         * ヘルスチェック
         * @returns Default Response
         */
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json(),
        /**
         * ヘルスチェック
         * @returns Default Response
         */
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH0}`
      },
      v1: {
        categories: {
          _uid: (val3: string) => {
            const prefix3 = `${PATH1}/${val3}`

            return {
              /**
               * category一件取得
               * @returns Default Response
               */
              get: (option?: { config?: T | undefined } | undefined) =>
                fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, prefix3, GET, option).json(),
              /**
               * category一件取得
               * @returns Default Response
               */
              $get: (option?: { config?: T | undefined } | undefined) =>
                fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, prefix3, GET, option).json().then(r => r.body),
              /**
               * category編集
               * @returns Default Response
               */
              put: (option: { body: Methods2['put']['reqBody'], config?: T | undefined }) =>
                fetch<Methods2['put']['resBody'], BasicHeaders, Methods2['put']['status']>(prefix, prefix3, PUT, option).json(),
              /**
               * category編集
               * @returns Default Response
               */
              $put: (option: { body: Methods2['put']['reqBody'], config?: T | undefined }) =>
                fetch<Methods2['put']['resBody'], BasicHeaders, Methods2['put']['status']>(prefix, prefix3, PUT, option).json().then(r => r.body),
              /**
               * category一件削除
               */
              delete: (option?: { config?: T | undefined } | undefined) =>
                fetch<void, BasicHeaders, Methods2['delete']['status']>(prefix, prefix3, DELETE, option).send(),
              /**
               * category一件削除
               */
              $delete: (option?: { config?: T | undefined } | undefined) =>
                fetch<void, BasicHeaders, Methods2['delete']['status']>(prefix, prefix3, DELETE, option).send().then(r => r.body),
              $path: () => `${prefix}${prefix3}`
            }
          },
          /**
           * category新規作成
           * @returns Default Response
           */
          post: (option: { body: Methods1['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods1['post']['resBody'], BasicHeaders, Methods1['post']['status']>(prefix, PATH1, POST, option).json(),
          /**
           * category新規作成
           * @returns Default Response
           */
          $post: (option: { body: Methods1['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods1['post']['resBody'], BasicHeaders, Methods1['post']['status']>(prefix, PATH1, POST, option).json().then(r => r.body),
          /**
           * category一覧取得
           * @returns Default Response
           */
          get: (option?: { query?: Methods1['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, PATH1, GET, option).json(),
          /**
           * category一覧取得
           * @returns Default Response
           */
          $get: (option?: { query?: Methods1['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, PATH1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods1['get']['query'] } | undefined) =>
            `${prefix}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        },
        posts: {
          _uid: (val3: string) => {
            const prefix3 = `${PATH2}/${val3}`

            return {
              /**
               * post一件取得
               * @returns Default Response
               */
              get: (option?: { config?: T | undefined } | undefined) =>
                fetch<Methods4['get']['resBody'], BasicHeaders, Methods4['get']['status']>(prefix, prefix3, GET, option).json(),
              /**
               * post一件取得
               * @returns Default Response
               */
              $get: (option?: { config?: T | undefined } | undefined) =>
                fetch<Methods4['get']['resBody'], BasicHeaders, Methods4['get']['status']>(prefix, prefix3, GET, option).json().then(r => r.body),
              /**
               * post編集
               * @returns Default Response
               */
              put: (option: { body: Methods4['put']['reqBody'], config?: T | undefined }) =>
                fetch<Methods4['put']['resBody'], BasicHeaders, Methods4['put']['status']>(prefix, prefix3, PUT, option).json(),
              /**
               * post編集
               * @returns Default Response
               */
              $put: (option: { body: Methods4['put']['reqBody'], config?: T | undefined }) =>
                fetch<Methods4['put']['resBody'], BasicHeaders, Methods4['put']['status']>(prefix, prefix3, PUT, option).json().then(r => r.body),
              /**
               * post一件削除
               */
              delete: (option?: { config?: T | undefined } | undefined) =>
                fetch<void, BasicHeaders, Methods4['delete']['status']>(prefix, prefix3, DELETE, option).send(),
              /**
               * post一件削除
               */
              $delete: (option?: { config?: T | undefined } | undefined) =>
                fetch<void, BasicHeaders, Methods4['delete']['status']>(prefix, prefix3, DELETE, option).send().then(r => r.body),
              $path: () => `${prefix}${prefix3}`
            }
          },
          /**
           * post新規作成
           * @returns Default Response
           */
          post: (option: { body: Methods3['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods3['post']['resBody'], BasicHeaders, Methods3['post']['status']>(prefix, PATH2, POST, option).json(),
          /**
           * post新規作成
           * @returns Default Response
           */
          $post: (option: { body: Methods3['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods3['post']['resBody'], BasicHeaders, Methods3['post']['status']>(prefix, PATH2, POST, option).json().then(r => r.body),
          /**
           * post一覧取得
           * @returns Default Response
           */
          get: (option?: { query?: Methods3['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, PATH2, GET, option).json(),
          /**
           * post一覧取得
           * @returns Default Response
           */
          $get: (option?: { query?: Methods3['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, PATH2, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods3['get']['query'] } | undefined) =>
            `${prefix}${PATH2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        },
        users: {
          _uid: (val3: string) => {
            const prefix3 = `${PATH3}/${val3}`

            return {
              /**
               * user一件取得
               * @returns Default Response
               */
              get: (option?: { config?: T | undefined } | undefined) =>
                fetch<Methods6['get']['resBody'], BasicHeaders, Methods6['get']['status']>(prefix, prefix3, GET, option).json(),
              /**
               * user一件取得
               * @returns Default Response
               */
              $get: (option?: { config?: T | undefined } | undefined) =>
                fetch<Methods6['get']['resBody'], BasicHeaders, Methods6['get']['status']>(prefix, prefix3, GET, option).json().then(r => r.body),
              /**
               * user編集
               * @returns Default Response
               */
              put: (option: { body: Methods6['put']['reqBody'], config?: T | undefined }) =>
                fetch<Methods6['put']['resBody'], BasicHeaders, Methods6['put']['status']>(prefix, prefix3, PUT, option).json(),
              /**
               * user編集
               * @returns Default Response
               */
              $put: (option: { body: Methods6['put']['reqBody'], config?: T | undefined }) =>
                fetch<Methods6['put']['resBody'], BasicHeaders, Methods6['put']['status']>(prefix, prefix3, PUT, option).json().then(r => r.body),
              /**
               * user一件削除
               */
              delete: (option?: { config?: T | undefined } | undefined) =>
                fetch<void, BasicHeaders, Methods6['delete']['status']>(prefix, prefix3, DELETE, option).send(),
              /**
               * user一件削除
               */
              $delete: (option?: { config?: T | undefined } | undefined) =>
                fetch<void, BasicHeaders, Methods6['delete']['status']>(prefix, prefix3, DELETE, option).send().then(r => r.body),
              $path: () => `${prefix}${prefix3}`
            }
          },
          /**
           * user新規作成
           * @returns Default Response
           */
          post: (option: { body: Methods5['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods5['post']['resBody'], BasicHeaders, Methods5['post']['status']>(prefix, PATH3, POST, option).json(),
          /**
           * user新規作成
           * @returns Default Response
           */
          $post: (option: { body: Methods5['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods5['post']['resBody'], BasicHeaders, Methods5['post']['status']>(prefix, PATH3, POST, option).json().then(r => r.body),
          /**
           * user一覧取得
           * @returns Default Response
           */
          get: (option?: { query?: Methods5['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods5['get']['resBody'], BasicHeaders, Methods5['get']['status']>(prefix, PATH3, GET, option).json(),
          /**
           * user一覧取得
           * @returns Default Response
           */
          $get: (option?: { query?: Methods5['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods5['get']['resBody'], BasicHeaders, Methods5['get']['status']>(prefix, PATH3, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods5['get']['query'] } | undefined) =>
            `${prefix}${PATH3}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        }
      }
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
