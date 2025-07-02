
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Rutina
 * 
 */
export type Rutina = $Result.DefaultSelection<Prisma.$RutinaPayload>
/**
 * Model Progreso
 * 
 */
export type Progreso = $Result.DefaultSelection<Prisma.$ProgresoPayload>
/**
 * Model Ejercicio
 * 
 */
export type Ejercicio = $Result.DefaultSelection<Prisma.$EjercicioPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Rol: {
  ADMIN: 'ADMIN',
  CLIENTE: 'CLIENTE'
};

export type Rol = (typeof Rol)[keyof typeof Rol]


export const Zona: {
  CALENTAMIENTO: 'CALENTAMIENTO',
  TREN_SUPERIOR: 'TREN_SUPERIOR',
  TREN_INFERIOR: 'TREN_INFERIOR',
  ZONA_MEDIA: 'ZONA_MEDIA'
};

export type Zona = (typeof Zona)[keyof typeof Zona]

}

export type Rol = $Enums.Rol

export const Rol: typeof $Enums.Rol

export type Zona = $Enums.Zona

export const Zona: typeof $Enums.Zona

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rutina`: Exposes CRUD operations for the **Rutina** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rutinas
    * const rutinas = await prisma.rutina.findMany()
    * ```
    */
  get rutina(): Prisma.RutinaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.progreso`: Exposes CRUD operations for the **Progreso** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Progresos
    * const progresos = await prisma.progreso.findMany()
    * ```
    */
  get progreso(): Prisma.ProgresoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ejercicio`: Exposes CRUD operations for the **Ejercicio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ejercicios
    * const ejercicios = await prisma.ejercicio.findMany()
    * ```
    */
  get ejercicio(): Prisma.EjercicioDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Usuario: 'Usuario',
    Rutina: 'Rutina',
    Progreso: 'Progreso',
    Ejercicio: 'Ejercicio'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "usuario" | "rutina" | "progreso" | "ejercicio"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Rutina: {
        payload: Prisma.$RutinaPayload<ExtArgs>
        fields: Prisma.RutinaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RutinaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RutinaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaPayload>
          }
          findFirst: {
            args: Prisma.RutinaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RutinaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaPayload>
          }
          findMany: {
            args: Prisma.RutinaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaPayload>[]
          }
          create: {
            args: Prisma.RutinaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaPayload>
          }
          createMany: {
            args: Prisma.RutinaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RutinaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaPayload>[]
          }
          delete: {
            args: Prisma.RutinaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaPayload>
          }
          update: {
            args: Prisma.RutinaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaPayload>
          }
          deleteMany: {
            args: Prisma.RutinaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RutinaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RutinaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaPayload>[]
          }
          upsert: {
            args: Prisma.RutinaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaPayload>
          }
          aggregate: {
            args: Prisma.RutinaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRutina>
          }
          groupBy: {
            args: Prisma.RutinaGroupByArgs<ExtArgs>
            result: $Utils.Optional<RutinaGroupByOutputType>[]
          }
          count: {
            args: Prisma.RutinaCountArgs<ExtArgs>
            result: $Utils.Optional<RutinaCountAggregateOutputType> | number
          }
        }
      }
      Progreso: {
        payload: Prisma.$ProgresoPayload<ExtArgs>
        fields: Prisma.ProgresoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProgresoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgresoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProgresoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgresoPayload>
          }
          findFirst: {
            args: Prisma.ProgresoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgresoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProgresoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgresoPayload>
          }
          findMany: {
            args: Prisma.ProgresoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgresoPayload>[]
          }
          create: {
            args: Prisma.ProgresoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgresoPayload>
          }
          createMany: {
            args: Prisma.ProgresoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProgresoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgresoPayload>[]
          }
          delete: {
            args: Prisma.ProgresoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgresoPayload>
          }
          update: {
            args: Prisma.ProgresoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgresoPayload>
          }
          deleteMany: {
            args: Prisma.ProgresoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProgresoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProgresoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgresoPayload>[]
          }
          upsert: {
            args: Prisma.ProgresoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgresoPayload>
          }
          aggregate: {
            args: Prisma.ProgresoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProgreso>
          }
          groupBy: {
            args: Prisma.ProgresoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProgresoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProgresoCountArgs<ExtArgs>
            result: $Utils.Optional<ProgresoCountAggregateOutputType> | number
          }
        }
      }
      Ejercicio: {
        payload: Prisma.$EjercicioPayload<ExtArgs>
        fields: Prisma.EjercicioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EjercicioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EjercicioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EjercicioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EjercicioPayload>
          }
          findFirst: {
            args: Prisma.EjercicioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EjercicioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EjercicioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EjercicioPayload>
          }
          findMany: {
            args: Prisma.EjercicioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EjercicioPayload>[]
          }
          create: {
            args: Prisma.EjercicioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EjercicioPayload>
          }
          createMany: {
            args: Prisma.EjercicioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EjercicioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EjercicioPayload>[]
          }
          delete: {
            args: Prisma.EjercicioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EjercicioPayload>
          }
          update: {
            args: Prisma.EjercicioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EjercicioPayload>
          }
          deleteMany: {
            args: Prisma.EjercicioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EjercicioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EjercicioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EjercicioPayload>[]
          }
          upsert: {
            args: Prisma.EjercicioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EjercicioPayload>
          }
          aggregate: {
            args: Prisma.EjercicioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEjercicio>
          }
          groupBy: {
            args: Prisma.EjercicioGroupByArgs<ExtArgs>
            result: $Utils.Optional<EjercicioGroupByOutputType>[]
          }
          count: {
            args: Prisma.EjercicioCountArgs<ExtArgs>
            result: $Utils.Optional<EjercicioCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    usuario?: UsuarioOmit
    rutina?: RutinaOmit
    progreso?: ProgresoOmit
    ejercicio?: EjercicioOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    rutinas: number
    progresos: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rutinas?: boolean | UsuarioCountOutputTypeCountRutinasArgs
    progresos?: boolean | UsuarioCountOutputTypeCountProgresosArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountRutinasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RutinaWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountProgresosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgresoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: string | null
    nombre: string | null
    email: string | null
    password: string | null
    rol: $Enums.Rol | null
    fechaInicio: Date | null
    fechaFin: Date | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: string | null
    nombre: string | null
    email: string | null
    password: string | null
    rol: $Enums.Rol | null
    fechaInicio: Date | null
    fechaFin: Date | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nombre: number
    email: number
    password: number
    rol: number
    fechaInicio: number
    fechaFin: number
    _all: number
  }


  export type UsuarioMinAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    password?: true
    rol?: true
    fechaInicio?: true
    fechaFin?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    password?: true
    rol?: true
    fechaInicio?: true
    fechaFin?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    password?: true
    rol?: true
    fechaInicio?: true
    fechaFin?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: string
    nombre: string
    email: string
    password: string
    rol: $Enums.Rol
    fechaInicio: Date | null
    fechaFin: Date | null
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    email?: boolean
    password?: boolean
    rol?: boolean
    fechaInicio?: boolean
    fechaFin?: boolean
    rutinas?: boolean | Usuario$rutinasArgs<ExtArgs>
    progresos?: boolean | Usuario$progresosArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    email?: boolean
    password?: boolean
    rol?: boolean
    fechaInicio?: boolean
    fechaFin?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    email?: boolean
    password?: boolean
    rol?: boolean
    fechaInicio?: boolean
    fechaFin?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    nombre?: boolean
    email?: boolean
    password?: boolean
    rol?: boolean
    fechaInicio?: boolean
    fechaFin?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "email" | "password" | "rol" | "fechaInicio" | "fechaFin", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rutinas?: boolean | Usuario$rutinasArgs<ExtArgs>
    progresos?: boolean | Usuario$progresosArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      rutinas: Prisma.$RutinaPayload<ExtArgs>[]
      progresos: Prisma.$ProgresoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nombre: string
      email: string
      password: string
      rol: $Enums.Rol
      fechaInicio: Date | null
      fechaFin: Date | null
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rutinas<T extends Usuario$rutinasArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$rutinasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RutinaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    progresos<T extends Usuario$progresosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$progresosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgresoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'String'>
    readonly nombre: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly password: FieldRef<"Usuario", 'String'>
    readonly rol: FieldRef<"Usuario", 'Rol'>
    readonly fechaInicio: FieldRef<"Usuario", 'DateTime'>
    readonly fechaFin: FieldRef<"Usuario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.rutinas
   */
  export type Usuario$rutinasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rutina
     */
    select?: RutinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rutina
     */
    omit?: RutinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaInclude<ExtArgs> | null
    where?: RutinaWhereInput
    orderBy?: RutinaOrderByWithRelationInput | RutinaOrderByWithRelationInput[]
    cursor?: RutinaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RutinaScalarFieldEnum | RutinaScalarFieldEnum[]
  }

  /**
   * Usuario.progresos
   */
  export type Usuario$progresosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progreso
     */
    select?: ProgresoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Progreso
     */
    omit?: ProgresoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresoInclude<ExtArgs> | null
    where?: ProgresoWhereInput
    orderBy?: ProgresoOrderByWithRelationInput | ProgresoOrderByWithRelationInput[]
    cursor?: ProgresoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProgresoScalarFieldEnum | ProgresoScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Rutina
   */

  export type AggregateRutina = {
    _count: RutinaCountAggregateOutputType | null
    _avg: RutinaAvgAggregateOutputType | null
    _sum: RutinaSumAggregateOutputType | null
    _min: RutinaMinAggregateOutputType | null
    _max: RutinaMaxAggregateOutputType | null
  }

  export type RutinaAvgAggregateOutputType = {
    semana: number | null
    dia: number | null
  }

  export type RutinaSumAggregateOutputType = {
    semana: number | null
    dia: number | null
  }

  export type RutinaMinAggregateOutputType = {
    id: string | null
    usuarioId: string | null
    semana: number | null
    dia: number | null
    ejercicios: string | null
  }

  export type RutinaMaxAggregateOutputType = {
    id: string | null
    usuarioId: string | null
    semana: number | null
    dia: number | null
    ejercicios: string | null
  }

  export type RutinaCountAggregateOutputType = {
    id: number
    usuarioId: number
    semana: number
    dia: number
    ejercicios: number
    _all: number
  }


  export type RutinaAvgAggregateInputType = {
    semana?: true
    dia?: true
  }

  export type RutinaSumAggregateInputType = {
    semana?: true
    dia?: true
  }

  export type RutinaMinAggregateInputType = {
    id?: true
    usuarioId?: true
    semana?: true
    dia?: true
    ejercicios?: true
  }

  export type RutinaMaxAggregateInputType = {
    id?: true
    usuarioId?: true
    semana?: true
    dia?: true
    ejercicios?: true
  }

  export type RutinaCountAggregateInputType = {
    id?: true
    usuarioId?: true
    semana?: true
    dia?: true
    ejercicios?: true
    _all?: true
  }

  export type RutinaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rutina to aggregate.
     */
    where?: RutinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rutinas to fetch.
     */
    orderBy?: RutinaOrderByWithRelationInput | RutinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RutinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rutinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rutinas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rutinas
    **/
    _count?: true | RutinaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RutinaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RutinaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RutinaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RutinaMaxAggregateInputType
  }

  export type GetRutinaAggregateType<T extends RutinaAggregateArgs> = {
        [P in keyof T & keyof AggregateRutina]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRutina[P]>
      : GetScalarType<T[P], AggregateRutina[P]>
  }




  export type RutinaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RutinaWhereInput
    orderBy?: RutinaOrderByWithAggregationInput | RutinaOrderByWithAggregationInput[]
    by: RutinaScalarFieldEnum[] | RutinaScalarFieldEnum
    having?: RutinaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RutinaCountAggregateInputType | true
    _avg?: RutinaAvgAggregateInputType
    _sum?: RutinaSumAggregateInputType
    _min?: RutinaMinAggregateInputType
    _max?: RutinaMaxAggregateInputType
  }

  export type RutinaGroupByOutputType = {
    id: string
    usuarioId: string
    semana: number
    dia: number
    ejercicios: string
    _count: RutinaCountAggregateOutputType | null
    _avg: RutinaAvgAggregateOutputType | null
    _sum: RutinaSumAggregateOutputType | null
    _min: RutinaMinAggregateOutputType | null
    _max: RutinaMaxAggregateOutputType | null
  }

  type GetRutinaGroupByPayload<T extends RutinaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RutinaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RutinaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RutinaGroupByOutputType[P]>
            : GetScalarType<T[P], RutinaGroupByOutputType[P]>
        }
      >
    >


  export type RutinaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    semana?: boolean
    dia?: boolean
    ejercicios?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rutina"]>

  export type RutinaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    semana?: boolean
    dia?: boolean
    ejercicios?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rutina"]>

  export type RutinaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    semana?: boolean
    dia?: boolean
    ejercicios?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rutina"]>

  export type RutinaSelectScalar = {
    id?: boolean
    usuarioId?: boolean
    semana?: boolean
    dia?: boolean
    ejercicios?: boolean
  }

  export type RutinaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usuarioId" | "semana" | "dia" | "ejercicios", ExtArgs["result"]["rutina"]>
  export type RutinaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type RutinaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type RutinaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $RutinaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rutina"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      usuarioId: string
      semana: number
      dia: number
      ejercicios: string
    }, ExtArgs["result"]["rutina"]>
    composites: {}
  }

  type RutinaGetPayload<S extends boolean | null | undefined | RutinaDefaultArgs> = $Result.GetResult<Prisma.$RutinaPayload, S>

  type RutinaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RutinaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RutinaCountAggregateInputType | true
    }

  export interface RutinaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rutina'], meta: { name: 'Rutina' } }
    /**
     * Find zero or one Rutina that matches the filter.
     * @param {RutinaFindUniqueArgs} args - Arguments to find a Rutina
     * @example
     * // Get one Rutina
     * const rutina = await prisma.rutina.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RutinaFindUniqueArgs>(args: SelectSubset<T, RutinaFindUniqueArgs<ExtArgs>>): Prisma__RutinaClient<$Result.GetResult<Prisma.$RutinaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rutina that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RutinaFindUniqueOrThrowArgs} args - Arguments to find a Rutina
     * @example
     * // Get one Rutina
     * const rutina = await prisma.rutina.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RutinaFindUniqueOrThrowArgs>(args: SelectSubset<T, RutinaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RutinaClient<$Result.GetResult<Prisma.$RutinaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rutina that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutinaFindFirstArgs} args - Arguments to find a Rutina
     * @example
     * // Get one Rutina
     * const rutina = await prisma.rutina.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RutinaFindFirstArgs>(args?: SelectSubset<T, RutinaFindFirstArgs<ExtArgs>>): Prisma__RutinaClient<$Result.GetResult<Prisma.$RutinaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rutina that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutinaFindFirstOrThrowArgs} args - Arguments to find a Rutina
     * @example
     * // Get one Rutina
     * const rutina = await prisma.rutina.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RutinaFindFirstOrThrowArgs>(args?: SelectSubset<T, RutinaFindFirstOrThrowArgs<ExtArgs>>): Prisma__RutinaClient<$Result.GetResult<Prisma.$RutinaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rutinas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutinaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rutinas
     * const rutinas = await prisma.rutina.findMany()
     * 
     * // Get first 10 Rutinas
     * const rutinas = await prisma.rutina.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rutinaWithIdOnly = await prisma.rutina.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RutinaFindManyArgs>(args?: SelectSubset<T, RutinaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RutinaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rutina.
     * @param {RutinaCreateArgs} args - Arguments to create a Rutina.
     * @example
     * // Create one Rutina
     * const Rutina = await prisma.rutina.create({
     *   data: {
     *     // ... data to create a Rutina
     *   }
     * })
     * 
     */
    create<T extends RutinaCreateArgs>(args: SelectSubset<T, RutinaCreateArgs<ExtArgs>>): Prisma__RutinaClient<$Result.GetResult<Prisma.$RutinaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rutinas.
     * @param {RutinaCreateManyArgs} args - Arguments to create many Rutinas.
     * @example
     * // Create many Rutinas
     * const rutina = await prisma.rutina.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RutinaCreateManyArgs>(args?: SelectSubset<T, RutinaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rutinas and returns the data saved in the database.
     * @param {RutinaCreateManyAndReturnArgs} args - Arguments to create many Rutinas.
     * @example
     * // Create many Rutinas
     * const rutina = await prisma.rutina.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rutinas and only return the `id`
     * const rutinaWithIdOnly = await prisma.rutina.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RutinaCreateManyAndReturnArgs>(args?: SelectSubset<T, RutinaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RutinaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Rutina.
     * @param {RutinaDeleteArgs} args - Arguments to delete one Rutina.
     * @example
     * // Delete one Rutina
     * const Rutina = await prisma.rutina.delete({
     *   where: {
     *     // ... filter to delete one Rutina
     *   }
     * })
     * 
     */
    delete<T extends RutinaDeleteArgs>(args: SelectSubset<T, RutinaDeleteArgs<ExtArgs>>): Prisma__RutinaClient<$Result.GetResult<Prisma.$RutinaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rutina.
     * @param {RutinaUpdateArgs} args - Arguments to update one Rutina.
     * @example
     * // Update one Rutina
     * const rutina = await prisma.rutina.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RutinaUpdateArgs>(args: SelectSubset<T, RutinaUpdateArgs<ExtArgs>>): Prisma__RutinaClient<$Result.GetResult<Prisma.$RutinaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rutinas.
     * @param {RutinaDeleteManyArgs} args - Arguments to filter Rutinas to delete.
     * @example
     * // Delete a few Rutinas
     * const { count } = await prisma.rutina.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RutinaDeleteManyArgs>(args?: SelectSubset<T, RutinaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rutinas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutinaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rutinas
     * const rutina = await prisma.rutina.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RutinaUpdateManyArgs>(args: SelectSubset<T, RutinaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rutinas and returns the data updated in the database.
     * @param {RutinaUpdateManyAndReturnArgs} args - Arguments to update many Rutinas.
     * @example
     * // Update many Rutinas
     * const rutina = await prisma.rutina.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rutinas and only return the `id`
     * const rutinaWithIdOnly = await prisma.rutina.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RutinaUpdateManyAndReturnArgs>(args: SelectSubset<T, RutinaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RutinaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Rutina.
     * @param {RutinaUpsertArgs} args - Arguments to update or create a Rutina.
     * @example
     * // Update or create a Rutina
     * const rutina = await prisma.rutina.upsert({
     *   create: {
     *     // ... data to create a Rutina
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rutina we want to update
     *   }
     * })
     */
    upsert<T extends RutinaUpsertArgs>(args: SelectSubset<T, RutinaUpsertArgs<ExtArgs>>): Prisma__RutinaClient<$Result.GetResult<Prisma.$RutinaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rutinas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutinaCountArgs} args - Arguments to filter Rutinas to count.
     * @example
     * // Count the number of Rutinas
     * const count = await prisma.rutina.count({
     *   where: {
     *     // ... the filter for the Rutinas we want to count
     *   }
     * })
    **/
    count<T extends RutinaCountArgs>(
      args?: Subset<T, RutinaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RutinaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rutina.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutinaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RutinaAggregateArgs>(args: Subset<T, RutinaAggregateArgs>): Prisma.PrismaPromise<GetRutinaAggregateType<T>>

    /**
     * Group by Rutina.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutinaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RutinaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RutinaGroupByArgs['orderBy'] }
        : { orderBy?: RutinaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RutinaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRutinaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rutina model
   */
  readonly fields: RutinaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rutina.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RutinaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Rutina model
   */
  interface RutinaFieldRefs {
    readonly id: FieldRef<"Rutina", 'String'>
    readonly usuarioId: FieldRef<"Rutina", 'String'>
    readonly semana: FieldRef<"Rutina", 'Int'>
    readonly dia: FieldRef<"Rutina", 'Int'>
    readonly ejercicios: FieldRef<"Rutina", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Rutina findUnique
   */
  export type RutinaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rutina
     */
    select?: RutinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rutina
     */
    omit?: RutinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaInclude<ExtArgs> | null
    /**
     * Filter, which Rutina to fetch.
     */
    where: RutinaWhereUniqueInput
  }

  /**
   * Rutina findUniqueOrThrow
   */
  export type RutinaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rutina
     */
    select?: RutinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rutina
     */
    omit?: RutinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaInclude<ExtArgs> | null
    /**
     * Filter, which Rutina to fetch.
     */
    where: RutinaWhereUniqueInput
  }

  /**
   * Rutina findFirst
   */
  export type RutinaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rutina
     */
    select?: RutinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rutina
     */
    omit?: RutinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaInclude<ExtArgs> | null
    /**
     * Filter, which Rutina to fetch.
     */
    where?: RutinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rutinas to fetch.
     */
    orderBy?: RutinaOrderByWithRelationInput | RutinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rutinas.
     */
    cursor?: RutinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rutinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rutinas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rutinas.
     */
    distinct?: RutinaScalarFieldEnum | RutinaScalarFieldEnum[]
  }

  /**
   * Rutina findFirstOrThrow
   */
  export type RutinaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rutina
     */
    select?: RutinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rutina
     */
    omit?: RutinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaInclude<ExtArgs> | null
    /**
     * Filter, which Rutina to fetch.
     */
    where?: RutinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rutinas to fetch.
     */
    orderBy?: RutinaOrderByWithRelationInput | RutinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rutinas.
     */
    cursor?: RutinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rutinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rutinas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rutinas.
     */
    distinct?: RutinaScalarFieldEnum | RutinaScalarFieldEnum[]
  }

  /**
   * Rutina findMany
   */
  export type RutinaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rutina
     */
    select?: RutinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rutina
     */
    omit?: RutinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaInclude<ExtArgs> | null
    /**
     * Filter, which Rutinas to fetch.
     */
    where?: RutinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rutinas to fetch.
     */
    orderBy?: RutinaOrderByWithRelationInput | RutinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rutinas.
     */
    cursor?: RutinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rutinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rutinas.
     */
    skip?: number
    distinct?: RutinaScalarFieldEnum | RutinaScalarFieldEnum[]
  }

  /**
   * Rutina create
   */
  export type RutinaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rutina
     */
    select?: RutinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rutina
     */
    omit?: RutinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaInclude<ExtArgs> | null
    /**
     * The data needed to create a Rutina.
     */
    data: XOR<RutinaCreateInput, RutinaUncheckedCreateInput>
  }

  /**
   * Rutina createMany
   */
  export type RutinaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rutinas.
     */
    data: RutinaCreateManyInput | RutinaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rutina createManyAndReturn
   */
  export type RutinaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rutina
     */
    select?: RutinaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rutina
     */
    omit?: RutinaOmit<ExtArgs> | null
    /**
     * The data used to create many Rutinas.
     */
    data: RutinaCreateManyInput | RutinaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Rutina update
   */
  export type RutinaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rutina
     */
    select?: RutinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rutina
     */
    omit?: RutinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaInclude<ExtArgs> | null
    /**
     * The data needed to update a Rutina.
     */
    data: XOR<RutinaUpdateInput, RutinaUncheckedUpdateInput>
    /**
     * Choose, which Rutina to update.
     */
    where: RutinaWhereUniqueInput
  }

  /**
   * Rutina updateMany
   */
  export type RutinaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rutinas.
     */
    data: XOR<RutinaUpdateManyMutationInput, RutinaUncheckedUpdateManyInput>
    /**
     * Filter which Rutinas to update
     */
    where?: RutinaWhereInput
    /**
     * Limit how many Rutinas to update.
     */
    limit?: number
  }

  /**
   * Rutina updateManyAndReturn
   */
  export type RutinaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rutina
     */
    select?: RutinaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rutina
     */
    omit?: RutinaOmit<ExtArgs> | null
    /**
     * The data used to update Rutinas.
     */
    data: XOR<RutinaUpdateManyMutationInput, RutinaUncheckedUpdateManyInput>
    /**
     * Filter which Rutinas to update
     */
    where?: RutinaWhereInput
    /**
     * Limit how many Rutinas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Rutina upsert
   */
  export type RutinaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rutina
     */
    select?: RutinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rutina
     */
    omit?: RutinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaInclude<ExtArgs> | null
    /**
     * The filter to search for the Rutina to update in case it exists.
     */
    where: RutinaWhereUniqueInput
    /**
     * In case the Rutina found by the `where` argument doesn't exist, create a new Rutina with this data.
     */
    create: XOR<RutinaCreateInput, RutinaUncheckedCreateInput>
    /**
     * In case the Rutina was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RutinaUpdateInput, RutinaUncheckedUpdateInput>
  }

  /**
   * Rutina delete
   */
  export type RutinaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rutina
     */
    select?: RutinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rutina
     */
    omit?: RutinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaInclude<ExtArgs> | null
    /**
     * Filter which Rutina to delete.
     */
    where: RutinaWhereUniqueInput
  }

  /**
   * Rutina deleteMany
   */
  export type RutinaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rutinas to delete
     */
    where?: RutinaWhereInput
    /**
     * Limit how many Rutinas to delete.
     */
    limit?: number
  }

  /**
   * Rutina without action
   */
  export type RutinaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rutina
     */
    select?: RutinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rutina
     */
    omit?: RutinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaInclude<ExtArgs> | null
  }


  /**
   * Model Progreso
   */

  export type AggregateProgreso = {
    _count: ProgresoCountAggregateOutputType | null
    _min: ProgresoMinAggregateOutputType | null
    _max: ProgresoMaxAggregateOutputType | null
  }

  export type ProgresoMinAggregateOutputType = {
    id: string | null
    usuarioId: string | null
    fecha: Date | null
    completado: boolean | null
  }

  export type ProgresoMaxAggregateOutputType = {
    id: string | null
    usuarioId: string | null
    fecha: Date | null
    completado: boolean | null
  }

  export type ProgresoCountAggregateOutputType = {
    id: number
    usuarioId: number
    fecha: number
    completado: number
    _all: number
  }


  export type ProgresoMinAggregateInputType = {
    id?: true
    usuarioId?: true
    fecha?: true
    completado?: true
  }

  export type ProgresoMaxAggregateInputType = {
    id?: true
    usuarioId?: true
    fecha?: true
    completado?: true
  }

  export type ProgresoCountAggregateInputType = {
    id?: true
    usuarioId?: true
    fecha?: true
    completado?: true
    _all?: true
  }

  export type ProgresoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Progreso to aggregate.
     */
    where?: ProgresoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Progresos to fetch.
     */
    orderBy?: ProgresoOrderByWithRelationInput | ProgresoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProgresoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Progresos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Progresos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Progresos
    **/
    _count?: true | ProgresoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProgresoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProgresoMaxAggregateInputType
  }

  export type GetProgresoAggregateType<T extends ProgresoAggregateArgs> = {
        [P in keyof T & keyof AggregateProgreso]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProgreso[P]>
      : GetScalarType<T[P], AggregateProgreso[P]>
  }




  export type ProgresoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgresoWhereInput
    orderBy?: ProgresoOrderByWithAggregationInput | ProgresoOrderByWithAggregationInput[]
    by: ProgresoScalarFieldEnum[] | ProgresoScalarFieldEnum
    having?: ProgresoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProgresoCountAggregateInputType | true
    _min?: ProgresoMinAggregateInputType
    _max?: ProgresoMaxAggregateInputType
  }

  export type ProgresoGroupByOutputType = {
    id: string
    usuarioId: string
    fecha: Date
    completado: boolean
    _count: ProgresoCountAggregateOutputType | null
    _min: ProgresoMinAggregateOutputType | null
    _max: ProgresoMaxAggregateOutputType | null
  }

  type GetProgresoGroupByPayload<T extends ProgresoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProgresoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProgresoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProgresoGroupByOutputType[P]>
            : GetScalarType<T[P], ProgresoGroupByOutputType[P]>
        }
      >
    >


  export type ProgresoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    fecha?: boolean
    completado?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["progreso"]>

  export type ProgresoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    fecha?: boolean
    completado?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["progreso"]>

  export type ProgresoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    fecha?: boolean
    completado?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["progreso"]>

  export type ProgresoSelectScalar = {
    id?: boolean
    usuarioId?: boolean
    fecha?: boolean
    completado?: boolean
  }

  export type ProgresoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usuarioId" | "fecha" | "completado", ExtArgs["result"]["progreso"]>
  export type ProgresoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type ProgresoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type ProgresoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $ProgresoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Progreso"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      usuarioId: string
      fecha: Date
      completado: boolean
    }, ExtArgs["result"]["progreso"]>
    composites: {}
  }

  type ProgresoGetPayload<S extends boolean | null | undefined | ProgresoDefaultArgs> = $Result.GetResult<Prisma.$ProgresoPayload, S>

  type ProgresoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProgresoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProgresoCountAggregateInputType | true
    }

  export interface ProgresoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Progreso'], meta: { name: 'Progreso' } }
    /**
     * Find zero or one Progreso that matches the filter.
     * @param {ProgresoFindUniqueArgs} args - Arguments to find a Progreso
     * @example
     * // Get one Progreso
     * const progreso = await prisma.progreso.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProgresoFindUniqueArgs>(args: SelectSubset<T, ProgresoFindUniqueArgs<ExtArgs>>): Prisma__ProgresoClient<$Result.GetResult<Prisma.$ProgresoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Progreso that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProgresoFindUniqueOrThrowArgs} args - Arguments to find a Progreso
     * @example
     * // Get one Progreso
     * const progreso = await prisma.progreso.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProgresoFindUniqueOrThrowArgs>(args: SelectSubset<T, ProgresoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProgresoClient<$Result.GetResult<Prisma.$ProgresoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Progreso that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgresoFindFirstArgs} args - Arguments to find a Progreso
     * @example
     * // Get one Progreso
     * const progreso = await prisma.progreso.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProgresoFindFirstArgs>(args?: SelectSubset<T, ProgresoFindFirstArgs<ExtArgs>>): Prisma__ProgresoClient<$Result.GetResult<Prisma.$ProgresoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Progreso that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgresoFindFirstOrThrowArgs} args - Arguments to find a Progreso
     * @example
     * // Get one Progreso
     * const progreso = await prisma.progreso.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProgresoFindFirstOrThrowArgs>(args?: SelectSubset<T, ProgresoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProgresoClient<$Result.GetResult<Prisma.$ProgresoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Progresos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgresoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Progresos
     * const progresos = await prisma.progreso.findMany()
     * 
     * // Get first 10 Progresos
     * const progresos = await prisma.progreso.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const progresoWithIdOnly = await prisma.progreso.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProgresoFindManyArgs>(args?: SelectSubset<T, ProgresoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgresoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Progreso.
     * @param {ProgresoCreateArgs} args - Arguments to create a Progreso.
     * @example
     * // Create one Progreso
     * const Progreso = await prisma.progreso.create({
     *   data: {
     *     // ... data to create a Progreso
     *   }
     * })
     * 
     */
    create<T extends ProgresoCreateArgs>(args: SelectSubset<T, ProgresoCreateArgs<ExtArgs>>): Prisma__ProgresoClient<$Result.GetResult<Prisma.$ProgresoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Progresos.
     * @param {ProgresoCreateManyArgs} args - Arguments to create many Progresos.
     * @example
     * // Create many Progresos
     * const progreso = await prisma.progreso.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProgresoCreateManyArgs>(args?: SelectSubset<T, ProgresoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Progresos and returns the data saved in the database.
     * @param {ProgresoCreateManyAndReturnArgs} args - Arguments to create many Progresos.
     * @example
     * // Create many Progresos
     * const progreso = await prisma.progreso.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Progresos and only return the `id`
     * const progresoWithIdOnly = await prisma.progreso.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProgresoCreateManyAndReturnArgs>(args?: SelectSubset<T, ProgresoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgresoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Progreso.
     * @param {ProgresoDeleteArgs} args - Arguments to delete one Progreso.
     * @example
     * // Delete one Progreso
     * const Progreso = await prisma.progreso.delete({
     *   where: {
     *     // ... filter to delete one Progreso
     *   }
     * })
     * 
     */
    delete<T extends ProgresoDeleteArgs>(args: SelectSubset<T, ProgresoDeleteArgs<ExtArgs>>): Prisma__ProgresoClient<$Result.GetResult<Prisma.$ProgresoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Progreso.
     * @param {ProgresoUpdateArgs} args - Arguments to update one Progreso.
     * @example
     * // Update one Progreso
     * const progreso = await prisma.progreso.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProgresoUpdateArgs>(args: SelectSubset<T, ProgresoUpdateArgs<ExtArgs>>): Prisma__ProgresoClient<$Result.GetResult<Prisma.$ProgresoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Progresos.
     * @param {ProgresoDeleteManyArgs} args - Arguments to filter Progresos to delete.
     * @example
     * // Delete a few Progresos
     * const { count } = await prisma.progreso.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProgresoDeleteManyArgs>(args?: SelectSubset<T, ProgresoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Progresos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgresoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Progresos
     * const progreso = await prisma.progreso.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProgresoUpdateManyArgs>(args: SelectSubset<T, ProgresoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Progresos and returns the data updated in the database.
     * @param {ProgresoUpdateManyAndReturnArgs} args - Arguments to update many Progresos.
     * @example
     * // Update many Progresos
     * const progreso = await prisma.progreso.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Progresos and only return the `id`
     * const progresoWithIdOnly = await prisma.progreso.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProgresoUpdateManyAndReturnArgs>(args: SelectSubset<T, ProgresoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgresoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Progreso.
     * @param {ProgresoUpsertArgs} args - Arguments to update or create a Progreso.
     * @example
     * // Update or create a Progreso
     * const progreso = await prisma.progreso.upsert({
     *   create: {
     *     // ... data to create a Progreso
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Progreso we want to update
     *   }
     * })
     */
    upsert<T extends ProgresoUpsertArgs>(args: SelectSubset<T, ProgresoUpsertArgs<ExtArgs>>): Prisma__ProgresoClient<$Result.GetResult<Prisma.$ProgresoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Progresos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgresoCountArgs} args - Arguments to filter Progresos to count.
     * @example
     * // Count the number of Progresos
     * const count = await prisma.progreso.count({
     *   where: {
     *     // ... the filter for the Progresos we want to count
     *   }
     * })
    **/
    count<T extends ProgresoCountArgs>(
      args?: Subset<T, ProgresoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProgresoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Progreso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgresoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProgresoAggregateArgs>(args: Subset<T, ProgresoAggregateArgs>): Prisma.PrismaPromise<GetProgresoAggregateType<T>>

    /**
     * Group by Progreso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgresoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProgresoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProgresoGroupByArgs['orderBy'] }
        : { orderBy?: ProgresoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProgresoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProgresoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Progreso model
   */
  readonly fields: ProgresoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Progreso.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProgresoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Progreso model
   */
  interface ProgresoFieldRefs {
    readonly id: FieldRef<"Progreso", 'String'>
    readonly usuarioId: FieldRef<"Progreso", 'String'>
    readonly fecha: FieldRef<"Progreso", 'DateTime'>
    readonly completado: FieldRef<"Progreso", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Progreso findUnique
   */
  export type ProgresoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progreso
     */
    select?: ProgresoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Progreso
     */
    omit?: ProgresoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresoInclude<ExtArgs> | null
    /**
     * Filter, which Progreso to fetch.
     */
    where: ProgresoWhereUniqueInput
  }

  /**
   * Progreso findUniqueOrThrow
   */
  export type ProgresoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progreso
     */
    select?: ProgresoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Progreso
     */
    omit?: ProgresoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresoInclude<ExtArgs> | null
    /**
     * Filter, which Progreso to fetch.
     */
    where: ProgresoWhereUniqueInput
  }

  /**
   * Progreso findFirst
   */
  export type ProgresoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progreso
     */
    select?: ProgresoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Progreso
     */
    omit?: ProgresoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresoInclude<ExtArgs> | null
    /**
     * Filter, which Progreso to fetch.
     */
    where?: ProgresoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Progresos to fetch.
     */
    orderBy?: ProgresoOrderByWithRelationInput | ProgresoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Progresos.
     */
    cursor?: ProgresoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Progresos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Progresos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Progresos.
     */
    distinct?: ProgresoScalarFieldEnum | ProgresoScalarFieldEnum[]
  }

  /**
   * Progreso findFirstOrThrow
   */
  export type ProgresoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progreso
     */
    select?: ProgresoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Progreso
     */
    omit?: ProgresoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresoInclude<ExtArgs> | null
    /**
     * Filter, which Progreso to fetch.
     */
    where?: ProgresoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Progresos to fetch.
     */
    orderBy?: ProgresoOrderByWithRelationInput | ProgresoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Progresos.
     */
    cursor?: ProgresoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Progresos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Progresos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Progresos.
     */
    distinct?: ProgresoScalarFieldEnum | ProgresoScalarFieldEnum[]
  }

  /**
   * Progreso findMany
   */
  export type ProgresoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progreso
     */
    select?: ProgresoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Progreso
     */
    omit?: ProgresoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresoInclude<ExtArgs> | null
    /**
     * Filter, which Progresos to fetch.
     */
    where?: ProgresoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Progresos to fetch.
     */
    orderBy?: ProgresoOrderByWithRelationInput | ProgresoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Progresos.
     */
    cursor?: ProgresoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Progresos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Progresos.
     */
    skip?: number
    distinct?: ProgresoScalarFieldEnum | ProgresoScalarFieldEnum[]
  }

  /**
   * Progreso create
   */
  export type ProgresoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progreso
     */
    select?: ProgresoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Progreso
     */
    omit?: ProgresoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresoInclude<ExtArgs> | null
    /**
     * The data needed to create a Progreso.
     */
    data: XOR<ProgresoCreateInput, ProgresoUncheckedCreateInput>
  }

  /**
   * Progreso createMany
   */
  export type ProgresoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Progresos.
     */
    data: ProgresoCreateManyInput | ProgresoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Progreso createManyAndReturn
   */
  export type ProgresoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progreso
     */
    select?: ProgresoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Progreso
     */
    omit?: ProgresoOmit<ExtArgs> | null
    /**
     * The data used to create many Progresos.
     */
    data: ProgresoCreateManyInput | ProgresoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Progreso update
   */
  export type ProgresoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progreso
     */
    select?: ProgresoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Progreso
     */
    omit?: ProgresoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresoInclude<ExtArgs> | null
    /**
     * The data needed to update a Progreso.
     */
    data: XOR<ProgresoUpdateInput, ProgresoUncheckedUpdateInput>
    /**
     * Choose, which Progreso to update.
     */
    where: ProgresoWhereUniqueInput
  }

  /**
   * Progreso updateMany
   */
  export type ProgresoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Progresos.
     */
    data: XOR<ProgresoUpdateManyMutationInput, ProgresoUncheckedUpdateManyInput>
    /**
     * Filter which Progresos to update
     */
    where?: ProgresoWhereInput
    /**
     * Limit how many Progresos to update.
     */
    limit?: number
  }

  /**
   * Progreso updateManyAndReturn
   */
  export type ProgresoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progreso
     */
    select?: ProgresoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Progreso
     */
    omit?: ProgresoOmit<ExtArgs> | null
    /**
     * The data used to update Progresos.
     */
    data: XOR<ProgresoUpdateManyMutationInput, ProgresoUncheckedUpdateManyInput>
    /**
     * Filter which Progresos to update
     */
    where?: ProgresoWhereInput
    /**
     * Limit how many Progresos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Progreso upsert
   */
  export type ProgresoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progreso
     */
    select?: ProgresoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Progreso
     */
    omit?: ProgresoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresoInclude<ExtArgs> | null
    /**
     * The filter to search for the Progreso to update in case it exists.
     */
    where: ProgresoWhereUniqueInput
    /**
     * In case the Progreso found by the `where` argument doesn't exist, create a new Progreso with this data.
     */
    create: XOR<ProgresoCreateInput, ProgresoUncheckedCreateInput>
    /**
     * In case the Progreso was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProgresoUpdateInput, ProgresoUncheckedUpdateInput>
  }

  /**
   * Progreso delete
   */
  export type ProgresoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progreso
     */
    select?: ProgresoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Progreso
     */
    omit?: ProgresoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresoInclude<ExtArgs> | null
    /**
     * Filter which Progreso to delete.
     */
    where: ProgresoWhereUniqueInput
  }

  /**
   * Progreso deleteMany
   */
  export type ProgresoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Progresos to delete
     */
    where?: ProgresoWhereInput
    /**
     * Limit how many Progresos to delete.
     */
    limit?: number
  }

  /**
   * Progreso without action
   */
  export type ProgresoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progreso
     */
    select?: ProgresoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Progreso
     */
    omit?: ProgresoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresoInclude<ExtArgs> | null
  }


  /**
   * Model Ejercicio
   */

  export type AggregateEjercicio = {
    _count: EjercicioCountAggregateOutputType | null
    _min: EjercicioMinAggregateOutputType | null
    _max: EjercicioMaxAggregateOutputType | null
  }

  export type EjercicioMinAggregateOutputType = {
    id: string | null
    nombre: string | null
    zona: $Enums.Zona | null
    descripcion: string | null
    videoLink: string | null
  }

  export type EjercicioMaxAggregateOutputType = {
    id: string | null
    nombre: string | null
    zona: $Enums.Zona | null
    descripcion: string | null
    videoLink: string | null
  }

  export type EjercicioCountAggregateOutputType = {
    id: number
    nombre: number
    zona: number
    descripcion: number
    videoLink: number
    _all: number
  }


  export type EjercicioMinAggregateInputType = {
    id?: true
    nombre?: true
    zona?: true
    descripcion?: true
    videoLink?: true
  }

  export type EjercicioMaxAggregateInputType = {
    id?: true
    nombre?: true
    zona?: true
    descripcion?: true
    videoLink?: true
  }

  export type EjercicioCountAggregateInputType = {
    id?: true
    nombre?: true
    zona?: true
    descripcion?: true
    videoLink?: true
    _all?: true
  }

  export type EjercicioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ejercicio to aggregate.
     */
    where?: EjercicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ejercicios to fetch.
     */
    orderBy?: EjercicioOrderByWithRelationInput | EjercicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EjercicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ejercicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ejercicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ejercicios
    **/
    _count?: true | EjercicioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EjercicioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EjercicioMaxAggregateInputType
  }

  export type GetEjercicioAggregateType<T extends EjercicioAggregateArgs> = {
        [P in keyof T & keyof AggregateEjercicio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEjercicio[P]>
      : GetScalarType<T[P], AggregateEjercicio[P]>
  }




  export type EjercicioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EjercicioWhereInput
    orderBy?: EjercicioOrderByWithAggregationInput | EjercicioOrderByWithAggregationInput[]
    by: EjercicioScalarFieldEnum[] | EjercicioScalarFieldEnum
    having?: EjercicioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EjercicioCountAggregateInputType | true
    _min?: EjercicioMinAggregateInputType
    _max?: EjercicioMaxAggregateInputType
  }

  export type EjercicioGroupByOutputType = {
    id: string
    nombre: string
    zona: $Enums.Zona
    descripcion: string
    videoLink: string
    _count: EjercicioCountAggregateOutputType | null
    _min: EjercicioMinAggregateOutputType | null
    _max: EjercicioMaxAggregateOutputType | null
  }

  type GetEjercicioGroupByPayload<T extends EjercicioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EjercicioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EjercicioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EjercicioGroupByOutputType[P]>
            : GetScalarType<T[P], EjercicioGroupByOutputType[P]>
        }
      >
    >


  export type EjercicioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    zona?: boolean
    descripcion?: boolean
    videoLink?: boolean
  }, ExtArgs["result"]["ejercicio"]>

  export type EjercicioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    zona?: boolean
    descripcion?: boolean
    videoLink?: boolean
  }, ExtArgs["result"]["ejercicio"]>

  export type EjercicioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    zona?: boolean
    descripcion?: boolean
    videoLink?: boolean
  }, ExtArgs["result"]["ejercicio"]>

  export type EjercicioSelectScalar = {
    id?: boolean
    nombre?: boolean
    zona?: boolean
    descripcion?: boolean
    videoLink?: boolean
  }

  export type EjercicioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "zona" | "descripcion" | "videoLink", ExtArgs["result"]["ejercicio"]>

  export type $EjercicioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ejercicio"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nombre: string
      zona: $Enums.Zona
      descripcion: string
      videoLink: string
    }, ExtArgs["result"]["ejercicio"]>
    composites: {}
  }

  type EjercicioGetPayload<S extends boolean | null | undefined | EjercicioDefaultArgs> = $Result.GetResult<Prisma.$EjercicioPayload, S>

  type EjercicioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EjercicioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EjercicioCountAggregateInputType | true
    }

  export interface EjercicioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ejercicio'], meta: { name: 'Ejercicio' } }
    /**
     * Find zero or one Ejercicio that matches the filter.
     * @param {EjercicioFindUniqueArgs} args - Arguments to find a Ejercicio
     * @example
     * // Get one Ejercicio
     * const ejercicio = await prisma.ejercicio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EjercicioFindUniqueArgs>(args: SelectSubset<T, EjercicioFindUniqueArgs<ExtArgs>>): Prisma__EjercicioClient<$Result.GetResult<Prisma.$EjercicioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ejercicio that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EjercicioFindUniqueOrThrowArgs} args - Arguments to find a Ejercicio
     * @example
     * // Get one Ejercicio
     * const ejercicio = await prisma.ejercicio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EjercicioFindUniqueOrThrowArgs>(args: SelectSubset<T, EjercicioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EjercicioClient<$Result.GetResult<Prisma.$EjercicioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ejercicio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EjercicioFindFirstArgs} args - Arguments to find a Ejercicio
     * @example
     * // Get one Ejercicio
     * const ejercicio = await prisma.ejercicio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EjercicioFindFirstArgs>(args?: SelectSubset<T, EjercicioFindFirstArgs<ExtArgs>>): Prisma__EjercicioClient<$Result.GetResult<Prisma.$EjercicioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ejercicio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EjercicioFindFirstOrThrowArgs} args - Arguments to find a Ejercicio
     * @example
     * // Get one Ejercicio
     * const ejercicio = await prisma.ejercicio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EjercicioFindFirstOrThrowArgs>(args?: SelectSubset<T, EjercicioFindFirstOrThrowArgs<ExtArgs>>): Prisma__EjercicioClient<$Result.GetResult<Prisma.$EjercicioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ejercicios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EjercicioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ejercicios
     * const ejercicios = await prisma.ejercicio.findMany()
     * 
     * // Get first 10 Ejercicios
     * const ejercicios = await prisma.ejercicio.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ejercicioWithIdOnly = await prisma.ejercicio.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EjercicioFindManyArgs>(args?: SelectSubset<T, EjercicioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EjercicioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ejercicio.
     * @param {EjercicioCreateArgs} args - Arguments to create a Ejercicio.
     * @example
     * // Create one Ejercicio
     * const Ejercicio = await prisma.ejercicio.create({
     *   data: {
     *     // ... data to create a Ejercicio
     *   }
     * })
     * 
     */
    create<T extends EjercicioCreateArgs>(args: SelectSubset<T, EjercicioCreateArgs<ExtArgs>>): Prisma__EjercicioClient<$Result.GetResult<Prisma.$EjercicioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ejercicios.
     * @param {EjercicioCreateManyArgs} args - Arguments to create many Ejercicios.
     * @example
     * // Create many Ejercicios
     * const ejercicio = await prisma.ejercicio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EjercicioCreateManyArgs>(args?: SelectSubset<T, EjercicioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ejercicios and returns the data saved in the database.
     * @param {EjercicioCreateManyAndReturnArgs} args - Arguments to create many Ejercicios.
     * @example
     * // Create many Ejercicios
     * const ejercicio = await prisma.ejercicio.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ejercicios and only return the `id`
     * const ejercicioWithIdOnly = await prisma.ejercicio.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EjercicioCreateManyAndReturnArgs>(args?: SelectSubset<T, EjercicioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EjercicioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ejercicio.
     * @param {EjercicioDeleteArgs} args - Arguments to delete one Ejercicio.
     * @example
     * // Delete one Ejercicio
     * const Ejercicio = await prisma.ejercicio.delete({
     *   where: {
     *     // ... filter to delete one Ejercicio
     *   }
     * })
     * 
     */
    delete<T extends EjercicioDeleteArgs>(args: SelectSubset<T, EjercicioDeleteArgs<ExtArgs>>): Prisma__EjercicioClient<$Result.GetResult<Prisma.$EjercicioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ejercicio.
     * @param {EjercicioUpdateArgs} args - Arguments to update one Ejercicio.
     * @example
     * // Update one Ejercicio
     * const ejercicio = await prisma.ejercicio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EjercicioUpdateArgs>(args: SelectSubset<T, EjercicioUpdateArgs<ExtArgs>>): Prisma__EjercicioClient<$Result.GetResult<Prisma.$EjercicioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ejercicios.
     * @param {EjercicioDeleteManyArgs} args - Arguments to filter Ejercicios to delete.
     * @example
     * // Delete a few Ejercicios
     * const { count } = await prisma.ejercicio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EjercicioDeleteManyArgs>(args?: SelectSubset<T, EjercicioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ejercicios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EjercicioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ejercicios
     * const ejercicio = await prisma.ejercicio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EjercicioUpdateManyArgs>(args: SelectSubset<T, EjercicioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ejercicios and returns the data updated in the database.
     * @param {EjercicioUpdateManyAndReturnArgs} args - Arguments to update many Ejercicios.
     * @example
     * // Update many Ejercicios
     * const ejercicio = await prisma.ejercicio.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ejercicios and only return the `id`
     * const ejercicioWithIdOnly = await prisma.ejercicio.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EjercicioUpdateManyAndReturnArgs>(args: SelectSubset<T, EjercicioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EjercicioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ejercicio.
     * @param {EjercicioUpsertArgs} args - Arguments to update or create a Ejercicio.
     * @example
     * // Update or create a Ejercicio
     * const ejercicio = await prisma.ejercicio.upsert({
     *   create: {
     *     // ... data to create a Ejercicio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ejercicio we want to update
     *   }
     * })
     */
    upsert<T extends EjercicioUpsertArgs>(args: SelectSubset<T, EjercicioUpsertArgs<ExtArgs>>): Prisma__EjercicioClient<$Result.GetResult<Prisma.$EjercicioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ejercicios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EjercicioCountArgs} args - Arguments to filter Ejercicios to count.
     * @example
     * // Count the number of Ejercicios
     * const count = await prisma.ejercicio.count({
     *   where: {
     *     // ... the filter for the Ejercicios we want to count
     *   }
     * })
    **/
    count<T extends EjercicioCountArgs>(
      args?: Subset<T, EjercicioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EjercicioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ejercicio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EjercicioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EjercicioAggregateArgs>(args: Subset<T, EjercicioAggregateArgs>): Prisma.PrismaPromise<GetEjercicioAggregateType<T>>

    /**
     * Group by Ejercicio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EjercicioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EjercicioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EjercicioGroupByArgs['orderBy'] }
        : { orderBy?: EjercicioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EjercicioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEjercicioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ejercicio model
   */
  readonly fields: EjercicioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ejercicio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EjercicioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Ejercicio model
   */
  interface EjercicioFieldRefs {
    readonly id: FieldRef<"Ejercicio", 'String'>
    readonly nombre: FieldRef<"Ejercicio", 'String'>
    readonly zona: FieldRef<"Ejercicio", 'Zona'>
    readonly descripcion: FieldRef<"Ejercicio", 'String'>
    readonly videoLink: FieldRef<"Ejercicio", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Ejercicio findUnique
   */
  export type EjercicioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ejercicio
     */
    select?: EjercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ejercicio
     */
    omit?: EjercicioOmit<ExtArgs> | null
    /**
     * Filter, which Ejercicio to fetch.
     */
    where: EjercicioWhereUniqueInput
  }

  /**
   * Ejercicio findUniqueOrThrow
   */
  export type EjercicioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ejercicio
     */
    select?: EjercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ejercicio
     */
    omit?: EjercicioOmit<ExtArgs> | null
    /**
     * Filter, which Ejercicio to fetch.
     */
    where: EjercicioWhereUniqueInput
  }

  /**
   * Ejercicio findFirst
   */
  export type EjercicioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ejercicio
     */
    select?: EjercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ejercicio
     */
    omit?: EjercicioOmit<ExtArgs> | null
    /**
     * Filter, which Ejercicio to fetch.
     */
    where?: EjercicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ejercicios to fetch.
     */
    orderBy?: EjercicioOrderByWithRelationInput | EjercicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ejercicios.
     */
    cursor?: EjercicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ejercicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ejercicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ejercicios.
     */
    distinct?: EjercicioScalarFieldEnum | EjercicioScalarFieldEnum[]
  }

  /**
   * Ejercicio findFirstOrThrow
   */
  export type EjercicioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ejercicio
     */
    select?: EjercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ejercicio
     */
    omit?: EjercicioOmit<ExtArgs> | null
    /**
     * Filter, which Ejercicio to fetch.
     */
    where?: EjercicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ejercicios to fetch.
     */
    orderBy?: EjercicioOrderByWithRelationInput | EjercicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ejercicios.
     */
    cursor?: EjercicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ejercicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ejercicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ejercicios.
     */
    distinct?: EjercicioScalarFieldEnum | EjercicioScalarFieldEnum[]
  }

  /**
   * Ejercicio findMany
   */
  export type EjercicioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ejercicio
     */
    select?: EjercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ejercicio
     */
    omit?: EjercicioOmit<ExtArgs> | null
    /**
     * Filter, which Ejercicios to fetch.
     */
    where?: EjercicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ejercicios to fetch.
     */
    orderBy?: EjercicioOrderByWithRelationInput | EjercicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ejercicios.
     */
    cursor?: EjercicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ejercicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ejercicios.
     */
    skip?: number
    distinct?: EjercicioScalarFieldEnum | EjercicioScalarFieldEnum[]
  }

  /**
   * Ejercicio create
   */
  export type EjercicioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ejercicio
     */
    select?: EjercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ejercicio
     */
    omit?: EjercicioOmit<ExtArgs> | null
    /**
     * The data needed to create a Ejercicio.
     */
    data: XOR<EjercicioCreateInput, EjercicioUncheckedCreateInput>
  }

  /**
   * Ejercicio createMany
   */
  export type EjercicioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ejercicios.
     */
    data: EjercicioCreateManyInput | EjercicioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ejercicio createManyAndReturn
   */
  export type EjercicioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ejercicio
     */
    select?: EjercicioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ejercicio
     */
    omit?: EjercicioOmit<ExtArgs> | null
    /**
     * The data used to create many Ejercicios.
     */
    data: EjercicioCreateManyInput | EjercicioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ejercicio update
   */
  export type EjercicioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ejercicio
     */
    select?: EjercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ejercicio
     */
    omit?: EjercicioOmit<ExtArgs> | null
    /**
     * The data needed to update a Ejercicio.
     */
    data: XOR<EjercicioUpdateInput, EjercicioUncheckedUpdateInput>
    /**
     * Choose, which Ejercicio to update.
     */
    where: EjercicioWhereUniqueInput
  }

  /**
   * Ejercicio updateMany
   */
  export type EjercicioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ejercicios.
     */
    data: XOR<EjercicioUpdateManyMutationInput, EjercicioUncheckedUpdateManyInput>
    /**
     * Filter which Ejercicios to update
     */
    where?: EjercicioWhereInput
    /**
     * Limit how many Ejercicios to update.
     */
    limit?: number
  }

  /**
   * Ejercicio updateManyAndReturn
   */
  export type EjercicioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ejercicio
     */
    select?: EjercicioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ejercicio
     */
    omit?: EjercicioOmit<ExtArgs> | null
    /**
     * The data used to update Ejercicios.
     */
    data: XOR<EjercicioUpdateManyMutationInput, EjercicioUncheckedUpdateManyInput>
    /**
     * Filter which Ejercicios to update
     */
    where?: EjercicioWhereInput
    /**
     * Limit how many Ejercicios to update.
     */
    limit?: number
  }

  /**
   * Ejercicio upsert
   */
  export type EjercicioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ejercicio
     */
    select?: EjercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ejercicio
     */
    omit?: EjercicioOmit<ExtArgs> | null
    /**
     * The filter to search for the Ejercicio to update in case it exists.
     */
    where: EjercicioWhereUniqueInput
    /**
     * In case the Ejercicio found by the `where` argument doesn't exist, create a new Ejercicio with this data.
     */
    create: XOR<EjercicioCreateInput, EjercicioUncheckedCreateInput>
    /**
     * In case the Ejercicio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EjercicioUpdateInput, EjercicioUncheckedUpdateInput>
  }

  /**
   * Ejercicio delete
   */
  export type EjercicioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ejercicio
     */
    select?: EjercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ejercicio
     */
    omit?: EjercicioOmit<ExtArgs> | null
    /**
     * Filter which Ejercicio to delete.
     */
    where: EjercicioWhereUniqueInput
  }

  /**
   * Ejercicio deleteMany
   */
  export type EjercicioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ejercicios to delete
     */
    where?: EjercicioWhereInput
    /**
     * Limit how many Ejercicios to delete.
     */
    limit?: number
  }

  /**
   * Ejercicio without action
   */
  export type EjercicioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ejercicio
     */
    select?: EjercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ejercicio
     */
    omit?: EjercicioOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    email: 'email',
    password: 'password',
    rol: 'rol',
    fechaInicio: 'fechaInicio',
    fechaFin: 'fechaFin'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const RutinaScalarFieldEnum: {
    id: 'id',
    usuarioId: 'usuarioId',
    semana: 'semana',
    dia: 'dia',
    ejercicios: 'ejercicios'
  };

  export type RutinaScalarFieldEnum = (typeof RutinaScalarFieldEnum)[keyof typeof RutinaScalarFieldEnum]


  export const ProgresoScalarFieldEnum: {
    id: 'id',
    usuarioId: 'usuarioId',
    fecha: 'fecha',
    completado: 'completado'
  };

  export type ProgresoScalarFieldEnum = (typeof ProgresoScalarFieldEnum)[keyof typeof ProgresoScalarFieldEnum]


  export const EjercicioScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    zona: 'zona',
    descripcion: 'descripcion',
    videoLink: 'videoLink'
  };

  export type EjercicioScalarFieldEnum = (typeof EjercicioScalarFieldEnum)[keyof typeof EjercicioScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Rol'
   */
  export type EnumRolFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Rol'>
    


  /**
   * Reference to a field of type 'Rol[]'
   */
  export type ListEnumRolFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Rol[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Zona'
   */
  export type EnumZonaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Zona'>
    


  /**
   * Reference to a field of type 'Zona[]'
   */
  export type ListEnumZonaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Zona[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: StringFilter<"Usuario"> | string
    nombre?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    password?: StringFilter<"Usuario"> | string
    rol?: EnumRolFilter<"Usuario"> | $Enums.Rol
    fechaInicio?: DateTimeNullableFilter<"Usuario"> | Date | string | null
    fechaFin?: DateTimeNullableFilter<"Usuario"> | Date | string | null
    rutinas?: RutinaListRelationFilter
    progresos?: ProgresoListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    password?: SortOrder
    rol?: SortOrder
    fechaInicio?: SortOrderInput | SortOrder
    fechaFin?: SortOrderInput | SortOrder
    rutinas?: RutinaOrderByRelationAggregateInput
    progresos?: ProgresoOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nombre?: StringFilter<"Usuario"> | string
    password?: StringFilter<"Usuario"> | string
    rol?: EnumRolFilter<"Usuario"> | $Enums.Rol
    fechaInicio?: DateTimeNullableFilter<"Usuario"> | Date | string | null
    fechaFin?: DateTimeNullableFilter<"Usuario"> | Date | string | null
    rutinas?: RutinaListRelationFilter
    progresos?: ProgresoListRelationFilter
  }, "id" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    password?: SortOrder
    rol?: SortOrder
    fechaInicio?: SortOrderInput | SortOrder
    fechaFin?: SortOrderInput | SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Usuario"> | string
    nombre?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    password?: StringWithAggregatesFilter<"Usuario"> | string
    rol?: EnumRolWithAggregatesFilter<"Usuario"> | $Enums.Rol
    fechaInicio?: DateTimeNullableWithAggregatesFilter<"Usuario"> | Date | string | null
    fechaFin?: DateTimeNullableWithAggregatesFilter<"Usuario"> | Date | string | null
  }

  export type RutinaWhereInput = {
    AND?: RutinaWhereInput | RutinaWhereInput[]
    OR?: RutinaWhereInput[]
    NOT?: RutinaWhereInput | RutinaWhereInput[]
    id?: StringFilter<"Rutina"> | string
    usuarioId?: StringFilter<"Rutina"> | string
    semana?: IntFilter<"Rutina"> | number
    dia?: IntFilter<"Rutina"> | number
    ejercicios?: StringFilter<"Rutina"> | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type RutinaOrderByWithRelationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    semana?: SortOrder
    dia?: SortOrder
    ejercicios?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type RutinaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RutinaWhereInput | RutinaWhereInput[]
    OR?: RutinaWhereInput[]
    NOT?: RutinaWhereInput | RutinaWhereInput[]
    usuarioId?: StringFilter<"Rutina"> | string
    semana?: IntFilter<"Rutina"> | number
    dia?: IntFilter<"Rutina"> | number
    ejercicios?: StringFilter<"Rutina"> | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id">

  export type RutinaOrderByWithAggregationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    semana?: SortOrder
    dia?: SortOrder
    ejercicios?: SortOrder
    _count?: RutinaCountOrderByAggregateInput
    _avg?: RutinaAvgOrderByAggregateInput
    _max?: RutinaMaxOrderByAggregateInput
    _min?: RutinaMinOrderByAggregateInput
    _sum?: RutinaSumOrderByAggregateInput
  }

  export type RutinaScalarWhereWithAggregatesInput = {
    AND?: RutinaScalarWhereWithAggregatesInput | RutinaScalarWhereWithAggregatesInput[]
    OR?: RutinaScalarWhereWithAggregatesInput[]
    NOT?: RutinaScalarWhereWithAggregatesInput | RutinaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Rutina"> | string
    usuarioId?: StringWithAggregatesFilter<"Rutina"> | string
    semana?: IntWithAggregatesFilter<"Rutina"> | number
    dia?: IntWithAggregatesFilter<"Rutina"> | number
    ejercicios?: StringWithAggregatesFilter<"Rutina"> | string
  }

  export type ProgresoWhereInput = {
    AND?: ProgresoWhereInput | ProgresoWhereInput[]
    OR?: ProgresoWhereInput[]
    NOT?: ProgresoWhereInput | ProgresoWhereInput[]
    id?: StringFilter<"Progreso"> | string
    usuarioId?: StringFilter<"Progreso"> | string
    fecha?: DateTimeFilter<"Progreso"> | Date | string
    completado?: BoolFilter<"Progreso"> | boolean
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type ProgresoOrderByWithRelationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    fecha?: SortOrder
    completado?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type ProgresoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProgresoWhereInput | ProgresoWhereInput[]
    OR?: ProgresoWhereInput[]
    NOT?: ProgresoWhereInput | ProgresoWhereInput[]
    usuarioId?: StringFilter<"Progreso"> | string
    fecha?: DateTimeFilter<"Progreso"> | Date | string
    completado?: BoolFilter<"Progreso"> | boolean
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id">

  export type ProgresoOrderByWithAggregationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    fecha?: SortOrder
    completado?: SortOrder
    _count?: ProgresoCountOrderByAggregateInput
    _max?: ProgresoMaxOrderByAggregateInput
    _min?: ProgresoMinOrderByAggregateInput
  }

  export type ProgresoScalarWhereWithAggregatesInput = {
    AND?: ProgresoScalarWhereWithAggregatesInput | ProgresoScalarWhereWithAggregatesInput[]
    OR?: ProgresoScalarWhereWithAggregatesInput[]
    NOT?: ProgresoScalarWhereWithAggregatesInput | ProgresoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Progreso"> | string
    usuarioId?: StringWithAggregatesFilter<"Progreso"> | string
    fecha?: DateTimeWithAggregatesFilter<"Progreso"> | Date | string
    completado?: BoolWithAggregatesFilter<"Progreso"> | boolean
  }

  export type EjercicioWhereInput = {
    AND?: EjercicioWhereInput | EjercicioWhereInput[]
    OR?: EjercicioWhereInput[]
    NOT?: EjercicioWhereInput | EjercicioWhereInput[]
    id?: StringFilter<"Ejercicio"> | string
    nombre?: StringFilter<"Ejercicio"> | string
    zona?: EnumZonaFilter<"Ejercicio"> | $Enums.Zona
    descripcion?: StringFilter<"Ejercicio"> | string
    videoLink?: StringFilter<"Ejercicio"> | string
  }

  export type EjercicioOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    zona?: SortOrder
    descripcion?: SortOrder
    videoLink?: SortOrder
  }

  export type EjercicioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EjercicioWhereInput | EjercicioWhereInput[]
    OR?: EjercicioWhereInput[]
    NOT?: EjercicioWhereInput | EjercicioWhereInput[]
    nombre?: StringFilter<"Ejercicio"> | string
    zona?: EnumZonaFilter<"Ejercicio"> | $Enums.Zona
    descripcion?: StringFilter<"Ejercicio"> | string
    videoLink?: StringFilter<"Ejercicio"> | string
  }, "id">

  export type EjercicioOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    zona?: SortOrder
    descripcion?: SortOrder
    videoLink?: SortOrder
    _count?: EjercicioCountOrderByAggregateInput
    _max?: EjercicioMaxOrderByAggregateInput
    _min?: EjercicioMinOrderByAggregateInput
  }

  export type EjercicioScalarWhereWithAggregatesInput = {
    AND?: EjercicioScalarWhereWithAggregatesInput | EjercicioScalarWhereWithAggregatesInput[]
    OR?: EjercicioScalarWhereWithAggregatesInput[]
    NOT?: EjercicioScalarWhereWithAggregatesInput | EjercicioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Ejercicio"> | string
    nombre?: StringWithAggregatesFilter<"Ejercicio"> | string
    zona?: EnumZonaWithAggregatesFilter<"Ejercicio"> | $Enums.Zona
    descripcion?: StringWithAggregatesFilter<"Ejercicio"> | string
    videoLink?: StringWithAggregatesFilter<"Ejercicio"> | string
  }

  export type UsuarioCreateInput = {
    id?: string
    nombre: string
    email: string
    password: string
    rol?: $Enums.Rol
    fechaInicio?: Date | string | null
    fechaFin?: Date | string | null
    rutinas?: RutinaCreateNestedManyWithoutUsuarioInput
    progresos?: ProgresoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: string
    nombre: string
    email: string
    password: string
    rol?: $Enums.Rol
    fechaInicio?: Date | string | null
    fechaFin?: Date | string | null
    rutinas?: RutinaUncheckedCreateNestedManyWithoutUsuarioInput
    progresos?: ProgresoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    fechaInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rutinas?: RutinaUpdateManyWithoutUsuarioNestedInput
    progresos?: ProgresoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    fechaInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rutinas?: RutinaUncheckedUpdateManyWithoutUsuarioNestedInput
    progresos?: ProgresoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: string
    nombre: string
    email: string
    password: string
    rol?: $Enums.Rol
    fechaInicio?: Date | string | null
    fechaFin?: Date | string | null
  }

  export type UsuarioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    fechaInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    fechaInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RutinaCreateInput = {
    id?: string
    semana: number
    dia: number
    ejercicios: string
    usuario: UsuarioCreateNestedOneWithoutRutinasInput
  }

  export type RutinaUncheckedCreateInput = {
    id?: string
    usuarioId: string
    semana: number
    dia: number
    ejercicios: string
  }

  export type RutinaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    semana?: IntFieldUpdateOperationsInput | number
    dia?: IntFieldUpdateOperationsInput | number
    ejercicios?: StringFieldUpdateOperationsInput | string
    usuario?: UsuarioUpdateOneRequiredWithoutRutinasNestedInput
  }

  export type RutinaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    semana?: IntFieldUpdateOperationsInput | number
    dia?: IntFieldUpdateOperationsInput | number
    ejercicios?: StringFieldUpdateOperationsInput | string
  }

  export type RutinaCreateManyInput = {
    id?: string
    usuarioId: string
    semana: number
    dia: number
    ejercicios: string
  }

  export type RutinaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    semana?: IntFieldUpdateOperationsInput | number
    dia?: IntFieldUpdateOperationsInput | number
    ejercicios?: StringFieldUpdateOperationsInput | string
  }

  export type RutinaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    semana?: IntFieldUpdateOperationsInput | number
    dia?: IntFieldUpdateOperationsInput | number
    ejercicios?: StringFieldUpdateOperationsInput | string
  }

  export type ProgresoCreateInput = {
    id?: string
    fecha: Date | string
    completado: boolean
    usuario: UsuarioCreateNestedOneWithoutProgresosInput
  }

  export type ProgresoUncheckedCreateInput = {
    id?: string
    usuarioId: string
    fecha: Date | string
    completado: boolean
  }

  export type ProgresoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    completado?: BoolFieldUpdateOperationsInput | boolean
    usuario?: UsuarioUpdateOneRequiredWithoutProgresosNestedInput
  }

  export type ProgresoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    completado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProgresoCreateManyInput = {
    id?: string
    usuarioId: string
    fecha: Date | string
    completado: boolean
  }

  export type ProgresoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    completado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProgresoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    completado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EjercicioCreateInput = {
    id?: string
    nombre: string
    zona: $Enums.Zona
    descripcion: string
    videoLink: string
  }

  export type EjercicioUncheckedCreateInput = {
    id?: string
    nombre: string
    zona: $Enums.Zona
    descripcion: string
    videoLink: string
  }

  export type EjercicioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    zona?: EnumZonaFieldUpdateOperationsInput | $Enums.Zona
    descripcion?: StringFieldUpdateOperationsInput | string
    videoLink?: StringFieldUpdateOperationsInput | string
  }

  export type EjercicioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    zona?: EnumZonaFieldUpdateOperationsInput | $Enums.Zona
    descripcion?: StringFieldUpdateOperationsInput | string
    videoLink?: StringFieldUpdateOperationsInput | string
  }

  export type EjercicioCreateManyInput = {
    id?: string
    nombre: string
    zona: $Enums.Zona
    descripcion: string
    videoLink: string
  }

  export type EjercicioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    zona?: EnumZonaFieldUpdateOperationsInput | $Enums.Zona
    descripcion?: StringFieldUpdateOperationsInput | string
    videoLink?: StringFieldUpdateOperationsInput | string
  }

  export type EjercicioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    zona?: EnumZonaFieldUpdateOperationsInput | $Enums.Zona
    descripcion?: StringFieldUpdateOperationsInput | string
    videoLink?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRolFilter<$PrismaModel = never> = {
    equals?: $Enums.Rol | EnumRolFieldRefInput<$PrismaModel>
    in?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    not?: NestedEnumRolFilter<$PrismaModel> | $Enums.Rol
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type RutinaListRelationFilter = {
    every?: RutinaWhereInput
    some?: RutinaWhereInput
    none?: RutinaWhereInput
  }

  export type ProgresoListRelationFilter = {
    every?: ProgresoWhereInput
    some?: ProgresoWhereInput
    none?: ProgresoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RutinaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProgresoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    password?: SortOrder
    rol?: SortOrder
    fechaInicio?: SortOrder
    fechaFin?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    password?: SortOrder
    rol?: SortOrder
    fechaInicio?: SortOrder
    fechaFin?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    password?: SortOrder
    rol?: SortOrder
    fechaInicio?: SortOrder
    fechaFin?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Rol | EnumRolFieldRefInput<$PrismaModel>
    in?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    not?: NestedEnumRolWithAggregatesFilter<$PrismaModel> | $Enums.Rol
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRolFilter<$PrismaModel>
    _max?: NestedEnumRolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type RutinaCountOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    semana?: SortOrder
    dia?: SortOrder
    ejercicios?: SortOrder
  }

  export type RutinaAvgOrderByAggregateInput = {
    semana?: SortOrder
    dia?: SortOrder
  }

  export type RutinaMaxOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    semana?: SortOrder
    dia?: SortOrder
    ejercicios?: SortOrder
  }

  export type RutinaMinOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    semana?: SortOrder
    dia?: SortOrder
    ejercicios?: SortOrder
  }

  export type RutinaSumOrderByAggregateInput = {
    semana?: SortOrder
    dia?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ProgresoCountOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    fecha?: SortOrder
    completado?: SortOrder
  }

  export type ProgresoMaxOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    fecha?: SortOrder
    completado?: SortOrder
  }

  export type ProgresoMinOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    fecha?: SortOrder
    completado?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumZonaFilter<$PrismaModel = never> = {
    equals?: $Enums.Zona | EnumZonaFieldRefInput<$PrismaModel>
    in?: $Enums.Zona[] | ListEnumZonaFieldRefInput<$PrismaModel>
    notIn?: $Enums.Zona[] | ListEnumZonaFieldRefInput<$PrismaModel>
    not?: NestedEnumZonaFilter<$PrismaModel> | $Enums.Zona
  }

  export type EjercicioCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    zona?: SortOrder
    descripcion?: SortOrder
    videoLink?: SortOrder
  }

  export type EjercicioMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    zona?: SortOrder
    descripcion?: SortOrder
    videoLink?: SortOrder
  }

  export type EjercicioMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    zona?: SortOrder
    descripcion?: SortOrder
    videoLink?: SortOrder
  }

  export type EnumZonaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Zona | EnumZonaFieldRefInput<$PrismaModel>
    in?: $Enums.Zona[] | ListEnumZonaFieldRefInput<$PrismaModel>
    notIn?: $Enums.Zona[] | ListEnumZonaFieldRefInput<$PrismaModel>
    not?: NestedEnumZonaWithAggregatesFilter<$PrismaModel> | $Enums.Zona
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumZonaFilter<$PrismaModel>
    _max?: NestedEnumZonaFilter<$PrismaModel>
  }

  export type RutinaCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<RutinaCreateWithoutUsuarioInput, RutinaUncheckedCreateWithoutUsuarioInput> | RutinaCreateWithoutUsuarioInput[] | RutinaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: RutinaCreateOrConnectWithoutUsuarioInput | RutinaCreateOrConnectWithoutUsuarioInput[]
    createMany?: RutinaCreateManyUsuarioInputEnvelope
    connect?: RutinaWhereUniqueInput | RutinaWhereUniqueInput[]
  }

  export type ProgresoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ProgresoCreateWithoutUsuarioInput, ProgresoUncheckedCreateWithoutUsuarioInput> | ProgresoCreateWithoutUsuarioInput[] | ProgresoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ProgresoCreateOrConnectWithoutUsuarioInput | ProgresoCreateOrConnectWithoutUsuarioInput[]
    createMany?: ProgresoCreateManyUsuarioInputEnvelope
    connect?: ProgresoWhereUniqueInput | ProgresoWhereUniqueInput[]
  }

  export type RutinaUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<RutinaCreateWithoutUsuarioInput, RutinaUncheckedCreateWithoutUsuarioInput> | RutinaCreateWithoutUsuarioInput[] | RutinaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: RutinaCreateOrConnectWithoutUsuarioInput | RutinaCreateOrConnectWithoutUsuarioInput[]
    createMany?: RutinaCreateManyUsuarioInputEnvelope
    connect?: RutinaWhereUniqueInput | RutinaWhereUniqueInput[]
  }

  export type ProgresoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ProgresoCreateWithoutUsuarioInput, ProgresoUncheckedCreateWithoutUsuarioInput> | ProgresoCreateWithoutUsuarioInput[] | ProgresoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ProgresoCreateOrConnectWithoutUsuarioInput | ProgresoCreateOrConnectWithoutUsuarioInput[]
    createMany?: ProgresoCreateManyUsuarioInputEnvelope
    connect?: ProgresoWhereUniqueInput | ProgresoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRolFieldUpdateOperationsInput = {
    set?: $Enums.Rol
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type RutinaUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<RutinaCreateWithoutUsuarioInput, RutinaUncheckedCreateWithoutUsuarioInput> | RutinaCreateWithoutUsuarioInput[] | RutinaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: RutinaCreateOrConnectWithoutUsuarioInput | RutinaCreateOrConnectWithoutUsuarioInput[]
    upsert?: RutinaUpsertWithWhereUniqueWithoutUsuarioInput | RutinaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: RutinaCreateManyUsuarioInputEnvelope
    set?: RutinaWhereUniqueInput | RutinaWhereUniqueInput[]
    disconnect?: RutinaWhereUniqueInput | RutinaWhereUniqueInput[]
    delete?: RutinaWhereUniqueInput | RutinaWhereUniqueInput[]
    connect?: RutinaWhereUniqueInput | RutinaWhereUniqueInput[]
    update?: RutinaUpdateWithWhereUniqueWithoutUsuarioInput | RutinaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: RutinaUpdateManyWithWhereWithoutUsuarioInput | RutinaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: RutinaScalarWhereInput | RutinaScalarWhereInput[]
  }

  export type ProgresoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ProgresoCreateWithoutUsuarioInput, ProgresoUncheckedCreateWithoutUsuarioInput> | ProgresoCreateWithoutUsuarioInput[] | ProgresoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ProgresoCreateOrConnectWithoutUsuarioInput | ProgresoCreateOrConnectWithoutUsuarioInput[]
    upsert?: ProgresoUpsertWithWhereUniqueWithoutUsuarioInput | ProgresoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ProgresoCreateManyUsuarioInputEnvelope
    set?: ProgresoWhereUniqueInput | ProgresoWhereUniqueInput[]
    disconnect?: ProgresoWhereUniqueInput | ProgresoWhereUniqueInput[]
    delete?: ProgresoWhereUniqueInput | ProgresoWhereUniqueInput[]
    connect?: ProgresoWhereUniqueInput | ProgresoWhereUniqueInput[]
    update?: ProgresoUpdateWithWhereUniqueWithoutUsuarioInput | ProgresoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ProgresoUpdateManyWithWhereWithoutUsuarioInput | ProgresoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ProgresoScalarWhereInput | ProgresoScalarWhereInput[]
  }

  export type RutinaUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<RutinaCreateWithoutUsuarioInput, RutinaUncheckedCreateWithoutUsuarioInput> | RutinaCreateWithoutUsuarioInput[] | RutinaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: RutinaCreateOrConnectWithoutUsuarioInput | RutinaCreateOrConnectWithoutUsuarioInput[]
    upsert?: RutinaUpsertWithWhereUniqueWithoutUsuarioInput | RutinaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: RutinaCreateManyUsuarioInputEnvelope
    set?: RutinaWhereUniqueInput | RutinaWhereUniqueInput[]
    disconnect?: RutinaWhereUniqueInput | RutinaWhereUniqueInput[]
    delete?: RutinaWhereUniqueInput | RutinaWhereUniqueInput[]
    connect?: RutinaWhereUniqueInput | RutinaWhereUniqueInput[]
    update?: RutinaUpdateWithWhereUniqueWithoutUsuarioInput | RutinaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: RutinaUpdateManyWithWhereWithoutUsuarioInput | RutinaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: RutinaScalarWhereInput | RutinaScalarWhereInput[]
  }

  export type ProgresoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ProgresoCreateWithoutUsuarioInput, ProgresoUncheckedCreateWithoutUsuarioInput> | ProgresoCreateWithoutUsuarioInput[] | ProgresoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ProgresoCreateOrConnectWithoutUsuarioInput | ProgresoCreateOrConnectWithoutUsuarioInput[]
    upsert?: ProgresoUpsertWithWhereUniqueWithoutUsuarioInput | ProgresoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ProgresoCreateManyUsuarioInputEnvelope
    set?: ProgresoWhereUniqueInput | ProgresoWhereUniqueInput[]
    disconnect?: ProgresoWhereUniqueInput | ProgresoWhereUniqueInput[]
    delete?: ProgresoWhereUniqueInput | ProgresoWhereUniqueInput[]
    connect?: ProgresoWhereUniqueInput | ProgresoWhereUniqueInput[]
    update?: ProgresoUpdateWithWhereUniqueWithoutUsuarioInput | ProgresoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ProgresoUpdateManyWithWhereWithoutUsuarioInput | ProgresoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ProgresoScalarWhereInput | ProgresoScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutRutinasInput = {
    create?: XOR<UsuarioCreateWithoutRutinasInput, UsuarioUncheckedCreateWithoutRutinasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutRutinasInput
    connect?: UsuarioWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UsuarioUpdateOneRequiredWithoutRutinasNestedInput = {
    create?: XOR<UsuarioCreateWithoutRutinasInput, UsuarioUncheckedCreateWithoutRutinasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutRutinasInput
    upsert?: UsuarioUpsertWithoutRutinasInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutRutinasInput, UsuarioUpdateWithoutRutinasInput>, UsuarioUncheckedUpdateWithoutRutinasInput>
  }

  export type UsuarioCreateNestedOneWithoutProgresosInput = {
    create?: XOR<UsuarioCreateWithoutProgresosInput, UsuarioUncheckedCreateWithoutProgresosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutProgresosInput
    connect?: UsuarioWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UsuarioUpdateOneRequiredWithoutProgresosNestedInput = {
    create?: XOR<UsuarioCreateWithoutProgresosInput, UsuarioUncheckedCreateWithoutProgresosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutProgresosInput
    upsert?: UsuarioUpsertWithoutProgresosInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutProgresosInput, UsuarioUpdateWithoutProgresosInput>, UsuarioUncheckedUpdateWithoutProgresosInput>
  }

  export type EnumZonaFieldUpdateOperationsInput = {
    set?: $Enums.Zona
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRolFilter<$PrismaModel = never> = {
    equals?: $Enums.Rol | EnumRolFieldRefInput<$PrismaModel>
    in?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    not?: NestedEnumRolFilter<$PrismaModel> | $Enums.Rol
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumRolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Rol | EnumRolFieldRefInput<$PrismaModel>
    in?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    not?: NestedEnumRolWithAggregatesFilter<$PrismaModel> | $Enums.Rol
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRolFilter<$PrismaModel>
    _max?: NestedEnumRolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumZonaFilter<$PrismaModel = never> = {
    equals?: $Enums.Zona | EnumZonaFieldRefInput<$PrismaModel>
    in?: $Enums.Zona[] | ListEnumZonaFieldRefInput<$PrismaModel>
    notIn?: $Enums.Zona[] | ListEnumZonaFieldRefInput<$PrismaModel>
    not?: NestedEnumZonaFilter<$PrismaModel> | $Enums.Zona
  }

  export type NestedEnumZonaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Zona | EnumZonaFieldRefInput<$PrismaModel>
    in?: $Enums.Zona[] | ListEnumZonaFieldRefInput<$PrismaModel>
    notIn?: $Enums.Zona[] | ListEnumZonaFieldRefInput<$PrismaModel>
    not?: NestedEnumZonaWithAggregatesFilter<$PrismaModel> | $Enums.Zona
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumZonaFilter<$PrismaModel>
    _max?: NestedEnumZonaFilter<$PrismaModel>
  }

  export type RutinaCreateWithoutUsuarioInput = {
    id?: string
    semana: number
    dia: number
    ejercicios: string
  }

  export type RutinaUncheckedCreateWithoutUsuarioInput = {
    id?: string
    semana: number
    dia: number
    ejercicios: string
  }

  export type RutinaCreateOrConnectWithoutUsuarioInput = {
    where: RutinaWhereUniqueInput
    create: XOR<RutinaCreateWithoutUsuarioInput, RutinaUncheckedCreateWithoutUsuarioInput>
  }

  export type RutinaCreateManyUsuarioInputEnvelope = {
    data: RutinaCreateManyUsuarioInput | RutinaCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type ProgresoCreateWithoutUsuarioInput = {
    id?: string
    fecha: Date | string
    completado: boolean
  }

  export type ProgresoUncheckedCreateWithoutUsuarioInput = {
    id?: string
    fecha: Date | string
    completado: boolean
  }

  export type ProgresoCreateOrConnectWithoutUsuarioInput = {
    where: ProgresoWhereUniqueInput
    create: XOR<ProgresoCreateWithoutUsuarioInput, ProgresoUncheckedCreateWithoutUsuarioInput>
  }

  export type ProgresoCreateManyUsuarioInputEnvelope = {
    data: ProgresoCreateManyUsuarioInput | ProgresoCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type RutinaUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: RutinaWhereUniqueInput
    update: XOR<RutinaUpdateWithoutUsuarioInput, RutinaUncheckedUpdateWithoutUsuarioInput>
    create: XOR<RutinaCreateWithoutUsuarioInput, RutinaUncheckedCreateWithoutUsuarioInput>
  }

  export type RutinaUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: RutinaWhereUniqueInput
    data: XOR<RutinaUpdateWithoutUsuarioInput, RutinaUncheckedUpdateWithoutUsuarioInput>
  }

  export type RutinaUpdateManyWithWhereWithoutUsuarioInput = {
    where: RutinaScalarWhereInput
    data: XOR<RutinaUpdateManyMutationInput, RutinaUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type RutinaScalarWhereInput = {
    AND?: RutinaScalarWhereInput | RutinaScalarWhereInput[]
    OR?: RutinaScalarWhereInput[]
    NOT?: RutinaScalarWhereInput | RutinaScalarWhereInput[]
    id?: StringFilter<"Rutina"> | string
    usuarioId?: StringFilter<"Rutina"> | string
    semana?: IntFilter<"Rutina"> | number
    dia?: IntFilter<"Rutina"> | number
    ejercicios?: StringFilter<"Rutina"> | string
  }

  export type ProgresoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: ProgresoWhereUniqueInput
    update: XOR<ProgresoUpdateWithoutUsuarioInput, ProgresoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<ProgresoCreateWithoutUsuarioInput, ProgresoUncheckedCreateWithoutUsuarioInput>
  }

  export type ProgresoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: ProgresoWhereUniqueInput
    data: XOR<ProgresoUpdateWithoutUsuarioInput, ProgresoUncheckedUpdateWithoutUsuarioInput>
  }

  export type ProgresoUpdateManyWithWhereWithoutUsuarioInput = {
    where: ProgresoScalarWhereInput
    data: XOR<ProgresoUpdateManyMutationInput, ProgresoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type ProgresoScalarWhereInput = {
    AND?: ProgresoScalarWhereInput | ProgresoScalarWhereInput[]
    OR?: ProgresoScalarWhereInput[]
    NOT?: ProgresoScalarWhereInput | ProgresoScalarWhereInput[]
    id?: StringFilter<"Progreso"> | string
    usuarioId?: StringFilter<"Progreso"> | string
    fecha?: DateTimeFilter<"Progreso"> | Date | string
    completado?: BoolFilter<"Progreso"> | boolean
  }

  export type UsuarioCreateWithoutRutinasInput = {
    id?: string
    nombre: string
    email: string
    password: string
    rol?: $Enums.Rol
    fechaInicio?: Date | string | null
    fechaFin?: Date | string | null
    progresos?: ProgresoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutRutinasInput = {
    id?: string
    nombre: string
    email: string
    password: string
    rol?: $Enums.Rol
    fechaInicio?: Date | string | null
    fechaFin?: Date | string | null
    progresos?: ProgresoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutRutinasInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutRutinasInput, UsuarioUncheckedCreateWithoutRutinasInput>
  }

  export type UsuarioUpsertWithoutRutinasInput = {
    update: XOR<UsuarioUpdateWithoutRutinasInput, UsuarioUncheckedUpdateWithoutRutinasInput>
    create: XOR<UsuarioCreateWithoutRutinasInput, UsuarioUncheckedCreateWithoutRutinasInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutRutinasInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutRutinasInput, UsuarioUncheckedUpdateWithoutRutinasInput>
  }

  export type UsuarioUpdateWithoutRutinasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    fechaInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    progresos?: ProgresoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutRutinasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    fechaInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    progresos?: ProgresoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateWithoutProgresosInput = {
    id?: string
    nombre: string
    email: string
    password: string
    rol?: $Enums.Rol
    fechaInicio?: Date | string | null
    fechaFin?: Date | string | null
    rutinas?: RutinaCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutProgresosInput = {
    id?: string
    nombre: string
    email: string
    password: string
    rol?: $Enums.Rol
    fechaInicio?: Date | string | null
    fechaFin?: Date | string | null
    rutinas?: RutinaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutProgresosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutProgresosInput, UsuarioUncheckedCreateWithoutProgresosInput>
  }

  export type UsuarioUpsertWithoutProgresosInput = {
    update: XOR<UsuarioUpdateWithoutProgresosInput, UsuarioUncheckedUpdateWithoutProgresosInput>
    create: XOR<UsuarioCreateWithoutProgresosInput, UsuarioUncheckedCreateWithoutProgresosInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutProgresosInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutProgresosInput, UsuarioUncheckedUpdateWithoutProgresosInput>
  }

  export type UsuarioUpdateWithoutProgresosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    fechaInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rutinas?: RutinaUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutProgresosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    fechaInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rutinas?: RutinaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type RutinaCreateManyUsuarioInput = {
    id?: string
    semana: number
    dia: number
    ejercicios: string
  }

  export type ProgresoCreateManyUsuarioInput = {
    id?: string
    fecha: Date | string
    completado: boolean
  }

  export type RutinaUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    semana?: IntFieldUpdateOperationsInput | number
    dia?: IntFieldUpdateOperationsInput | number
    ejercicios?: StringFieldUpdateOperationsInput | string
  }

  export type RutinaUncheckedUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    semana?: IntFieldUpdateOperationsInput | number
    dia?: IntFieldUpdateOperationsInput | number
    ejercicios?: StringFieldUpdateOperationsInput | string
  }

  export type RutinaUncheckedUpdateManyWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    semana?: IntFieldUpdateOperationsInput | number
    dia?: IntFieldUpdateOperationsInput | number
    ejercicios?: StringFieldUpdateOperationsInput | string
  }

  export type ProgresoUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    completado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProgresoUncheckedUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    completado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProgresoUncheckedUpdateManyWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    completado?: BoolFieldUpdateOperationsInput | boolean
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}