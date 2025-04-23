
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
 * Model TypeProfessional
 * 
 */
export type TypeProfessional = $Result.DefaultSelection<Prisma.$TypeProfessionalPayload>
/**
 * Model Professional
 * 
 */
export type Professional = $Result.DefaultSelection<Prisma.$ProfessionalPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more TypeProfessionals
 * const typeProfessionals = await prisma.typeProfessional.findMany()
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
   * // Fetch zero or more TypeProfessionals
   * const typeProfessionals = await prisma.typeProfessional.findMany()
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
   * `prisma.typeProfessional`: Exposes CRUD operations for the **TypeProfessional** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TypeProfessionals
    * const typeProfessionals = await prisma.typeProfessional.findMany()
    * ```
    */
  get typeProfessional(): Prisma.TypeProfessionalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.professional`: Exposes CRUD operations for the **Professional** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Professionals
    * const professionals = await prisma.professional.findMany()
    * ```
    */
  get professional(): Prisma.ProfessionalDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    TypeProfessional: 'TypeProfessional',
    Professional: 'Professional'
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
      modelProps: "typeProfessional" | "professional"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      TypeProfessional: {
        payload: Prisma.$TypeProfessionalPayload<ExtArgs>
        fields: Prisma.TypeProfessionalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TypeProfessionalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypeProfessionalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TypeProfessionalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypeProfessionalPayload>
          }
          findFirst: {
            args: Prisma.TypeProfessionalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypeProfessionalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TypeProfessionalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypeProfessionalPayload>
          }
          findMany: {
            args: Prisma.TypeProfessionalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypeProfessionalPayload>[]
          }
          create: {
            args: Prisma.TypeProfessionalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypeProfessionalPayload>
          }
          createMany: {
            args: Prisma.TypeProfessionalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TypeProfessionalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypeProfessionalPayload>[]
          }
          delete: {
            args: Prisma.TypeProfessionalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypeProfessionalPayload>
          }
          update: {
            args: Prisma.TypeProfessionalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypeProfessionalPayload>
          }
          deleteMany: {
            args: Prisma.TypeProfessionalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TypeProfessionalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TypeProfessionalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypeProfessionalPayload>[]
          }
          upsert: {
            args: Prisma.TypeProfessionalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypeProfessionalPayload>
          }
          aggregate: {
            args: Prisma.TypeProfessionalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTypeProfessional>
          }
          groupBy: {
            args: Prisma.TypeProfessionalGroupByArgs<ExtArgs>
            result: $Utils.Optional<TypeProfessionalGroupByOutputType>[]
          }
          count: {
            args: Prisma.TypeProfessionalCountArgs<ExtArgs>
            result: $Utils.Optional<TypeProfessionalCountAggregateOutputType> | number
          }
        }
      }
      Professional: {
        payload: Prisma.$ProfessionalPayload<ExtArgs>
        fields: Prisma.ProfessionalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfessionalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfessionalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalPayload>
          }
          findFirst: {
            args: Prisma.ProfessionalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfessionalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalPayload>
          }
          findMany: {
            args: Prisma.ProfessionalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalPayload>[]
          }
          create: {
            args: Prisma.ProfessionalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalPayload>
          }
          createMany: {
            args: Prisma.ProfessionalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfessionalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalPayload>[]
          }
          delete: {
            args: Prisma.ProfessionalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalPayload>
          }
          update: {
            args: Prisma.ProfessionalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalPayload>
          }
          deleteMany: {
            args: Prisma.ProfessionalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfessionalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfessionalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalPayload>[]
          }
          upsert: {
            args: Prisma.ProfessionalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalPayload>
          }
          aggregate: {
            args: Prisma.ProfessionalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfessional>
          }
          groupBy: {
            args: Prisma.ProfessionalGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfessionalGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfessionalCountArgs<ExtArgs>
            result: $Utils.Optional<ProfessionalCountAggregateOutputType> | number
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
    typeProfessional?: TypeProfessionalOmit
    professional?: ProfessionalOmit
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
   * Count Type TypeProfessionalCountOutputType
   */

  export type TypeProfessionalCountOutputType = {
    professionals: number
  }

  export type TypeProfessionalCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professionals?: boolean | TypeProfessionalCountOutputTypeCountProfessionalsArgs
  }

  // Custom InputTypes
  /**
   * TypeProfessionalCountOutputType without action
   */
  export type TypeProfessionalCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeProfessionalCountOutputType
     */
    select?: TypeProfessionalCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TypeProfessionalCountOutputType without action
   */
  export type TypeProfessionalCountOutputTypeCountProfessionalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfessionalWhereInput
  }


  /**
   * Models
   */

  /**
   * Model TypeProfessional
   */

  export type AggregateTypeProfessional = {
    _count: TypeProfessionalCountAggregateOutputType | null
    _avg: TypeProfessionalAvgAggregateOutputType | null
    _sum: TypeProfessionalSumAggregateOutputType | null
    _min: TypeProfessionalMinAggregateOutputType | null
    _max: TypeProfessionalMaxAggregateOutputType | null
  }

  export type TypeProfessionalAvgAggregateOutputType = {
    id: number | null
  }

  export type TypeProfessionalSumAggregateOutputType = {
    id: number | null
  }

  export type TypeProfessionalMinAggregateOutputType = {
    id: number | null
    describe: string | null
    situation: boolean | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type TypeProfessionalMaxAggregateOutputType = {
    id: number | null
    describe: string | null
    situation: boolean | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type TypeProfessionalCountAggregateOutputType = {
    id: number
    describe: number
    situation: number
    updatedAt: number
    createdAt: number
    _all: number
  }


  export type TypeProfessionalAvgAggregateInputType = {
    id?: true
  }

  export type TypeProfessionalSumAggregateInputType = {
    id?: true
  }

  export type TypeProfessionalMinAggregateInputType = {
    id?: true
    describe?: true
    situation?: true
    updatedAt?: true
    createdAt?: true
  }

  export type TypeProfessionalMaxAggregateInputType = {
    id?: true
    describe?: true
    situation?: true
    updatedAt?: true
    createdAt?: true
  }

  export type TypeProfessionalCountAggregateInputType = {
    id?: true
    describe?: true
    situation?: true
    updatedAt?: true
    createdAt?: true
    _all?: true
  }

  export type TypeProfessionalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TypeProfessional to aggregate.
     */
    where?: TypeProfessionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TypeProfessionals to fetch.
     */
    orderBy?: TypeProfessionalOrderByWithRelationInput | TypeProfessionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TypeProfessionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TypeProfessionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TypeProfessionals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TypeProfessionals
    **/
    _count?: true | TypeProfessionalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TypeProfessionalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TypeProfessionalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TypeProfessionalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TypeProfessionalMaxAggregateInputType
  }

  export type GetTypeProfessionalAggregateType<T extends TypeProfessionalAggregateArgs> = {
        [P in keyof T & keyof AggregateTypeProfessional]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTypeProfessional[P]>
      : GetScalarType<T[P], AggregateTypeProfessional[P]>
  }




  export type TypeProfessionalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TypeProfessionalWhereInput
    orderBy?: TypeProfessionalOrderByWithAggregationInput | TypeProfessionalOrderByWithAggregationInput[]
    by: TypeProfessionalScalarFieldEnum[] | TypeProfessionalScalarFieldEnum
    having?: TypeProfessionalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TypeProfessionalCountAggregateInputType | true
    _avg?: TypeProfessionalAvgAggregateInputType
    _sum?: TypeProfessionalSumAggregateInputType
    _min?: TypeProfessionalMinAggregateInputType
    _max?: TypeProfessionalMaxAggregateInputType
  }

  export type TypeProfessionalGroupByOutputType = {
    id: number
    describe: string
    situation: boolean
    updatedAt: Date
    createdAt: Date
    _count: TypeProfessionalCountAggregateOutputType | null
    _avg: TypeProfessionalAvgAggregateOutputType | null
    _sum: TypeProfessionalSumAggregateOutputType | null
    _min: TypeProfessionalMinAggregateOutputType | null
    _max: TypeProfessionalMaxAggregateOutputType | null
  }

  type GetTypeProfessionalGroupByPayload<T extends TypeProfessionalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TypeProfessionalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TypeProfessionalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TypeProfessionalGroupByOutputType[P]>
            : GetScalarType<T[P], TypeProfessionalGroupByOutputType[P]>
        }
      >
    >


  export type TypeProfessionalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    describe?: boolean
    situation?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    professionals?: boolean | TypeProfessional$professionalsArgs<ExtArgs>
    _count?: boolean | TypeProfessionalCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["typeProfessional"]>

  export type TypeProfessionalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    describe?: boolean
    situation?: boolean
    updatedAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["typeProfessional"]>

  export type TypeProfessionalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    describe?: boolean
    situation?: boolean
    updatedAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["typeProfessional"]>

  export type TypeProfessionalSelectScalar = {
    id?: boolean
    describe?: boolean
    situation?: boolean
    updatedAt?: boolean
    createdAt?: boolean
  }

  export type TypeProfessionalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "describe" | "situation" | "updatedAt" | "createdAt", ExtArgs["result"]["typeProfessional"]>
  export type TypeProfessionalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professionals?: boolean | TypeProfessional$professionalsArgs<ExtArgs>
    _count?: boolean | TypeProfessionalCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TypeProfessionalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TypeProfessionalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TypeProfessionalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TypeProfessional"
    objects: {
      professionals: Prisma.$ProfessionalPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      describe: string
      situation: boolean
      updatedAt: Date
      createdAt: Date
    }, ExtArgs["result"]["typeProfessional"]>
    composites: {}
  }

  type TypeProfessionalGetPayload<S extends boolean | null | undefined | TypeProfessionalDefaultArgs> = $Result.GetResult<Prisma.$TypeProfessionalPayload, S>

  type TypeProfessionalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TypeProfessionalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TypeProfessionalCountAggregateInputType | true
    }

  export interface TypeProfessionalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TypeProfessional'], meta: { name: 'TypeProfessional' } }
    /**
     * Find zero or one TypeProfessional that matches the filter.
     * @param {TypeProfessionalFindUniqueArgs} args - Arguments to find a TypeProfessional
     * @example
     * // Get one TypeProfessional
     * const typeProfessional = await prisma.typeProfessional.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TypeProfessionalFindUniqueArgs>(args: SelectSubset<T, TypeProfessionalFindUniqueArgs<ExtArgs>>): Prisma__TypeProfessionalClient<$Result.GetResult<Prisma.$TypeProfessionalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TypeProfessional that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TypeProfessionalFindUniqueOrThrowArgs} args - Arguments to find a TypeProfessional
     * @example
     * // Get one TypeProfessional
     * const typeProfessional = await prisma.typeProfessional.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TypeProfessionalFindUniqueOrThrowArgs>(args: SelectSubset<T, TypeProfessionalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TypeProfessionalClient<$Result.GetResult<Prisma.$TypeProfessionalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TypeProfessional that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeProfessionalFindFirstArgs} args - Arguments to find a TypeProfessional
     * @example
     * // Get one TypeProfessional
     * const typeProfessional = await prisma.typeProfessional.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TypeProfessionalFindFirstArgs>(args?: SelectSubset<T, TypeProfessionalFindFirstArgs<ExtArgs>>): Prisma__TypeProfessionalClient<$Result.GetResult<Prisma.$TypeProfessionalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TypeProfessional that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeProfessionalFindFirstOrThrowArgs} args - Arguments to find a TypeProfessional
     * @example
     * // Get one TypeProfessional
     * const typeProfessional = await prisma.typeProfessional.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TypeProfessionalFindFirstOrThrowArgs>(args?: SelectSubset<T, TypeProfessionalFindFirstOrThrowArgs<ExtArgs>>): Prisma__TypeProfessionalClient<$Result.GetResult<Prisma.$TypeProfessionalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TypeProfessionals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeProfessionalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TypeProfessionals
     * const typeProfessionals = await prisma.typeProfessional.findMany()
     * 
     * // Get first 10 TypeProfessionals
     * const typeProfessionals = await prisma.typeProfessional.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const typeProfessionalWithIdOnly = await prisma.typeProfessional.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TypeProfessionalFindManyArgs>(args?: SelectSubset<T, TypeProfessionalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TypeProfessionalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TypeProfessional.
     * @param {TypeProfessionalCreateArgs} args - Arguments to create a TypeProfessional.
     * @example
     * // Create one TypeProfessional
     * const TypeProfessional = await prisma.typeProfessional.create({
     *   data: {
     *     // ... data to create a TypeProfessional
     *   }
     * })
     * 
     */
    create<T extends TypeProfessionalCreateArgs>(args: SelectSubset<T, TypeProfessionalCreateArgs<ExtArgs>>): Prisma__TypeProfessionalClient<$Result.GetResult<Prisma.$TypeProfessionalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TypeProfessionals.
     * @param {TypeProfessionalCreateManyArgs} args - Arguments to create many TypeProfessionals.
     * @example
     * // Create many TypeProfessionals
     * const typeProfessional = await prisma.typeProfessional.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TypeProfessionalCreateManyArgs>(args?: SelectSubset<T, TypeProfessionalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TypeProfessionals and returns the data saved in the database.
     * @param {TypeProfessionalCreateManyAndReturnArgs} args - Arguments to create many TypeProfessionals.
     * @example
     * // Create many TypeProfessionals
     * const typeProfessional = await prisma.typeProfessional.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TypeProfessionals and only return the `id`
     * const typeProfessionalWithIdOnly = await prisma.typeProfessional.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TypeProfessionalCreateManyAndReturnArgs>(args?: SelectSubset<T, TypeProfessionalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TypeProfessionalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TypeProfessional.
     * @param {TypeProfessionalDeleteArgs} args - Arguments to delete one TypeProfessional.
     * @example
     * // Delete one TypeProfessional
     * const TypeProfessional = await prisma.typeProfessional.delete({
     *   where: {
     *     // ... filter to delete one TypeProfessional
     *   }
     * })
     * 
     */
    delete<T extends TypeProfessionalDeleteArgs>(args: SelectSubset<T, TypeProfessionalDeleteArgs<ExtArgs>>): Prisma__TypeProfessionalClient<$Result.GetResult<Prisma.$TypeProfessionalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TypeProfessional.
     * @param {TypeProfessionalUpdateArgs} args - Arguments to update one TypeProfessional.
     * @example
     * // Update one TypeProfessional
     * const typeProfessional = await prisma.typeProfessional.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TypeProfessionalUpdateArgs>(args: SelectSubset<T, TypeProfessionalUpdateArgs<ExtArgs>>): Prisma__TypeProfessionalClient<$Result.GetResult<Prisma.$TypeProfessionalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TypeProfessionals.
     * @param {TypeProfessionalDeleteManyArgs} args - Arguments to filter TypeProfessionals to delete.
     * @example
     * // Delete a few TypeProfessionals
     * const { count } = await prisma.typeProfessional.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TypeProfessionalDeleteManyArgs>(args?: SelectSubset<T, TypeProfessionalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TypeProfessionals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeProfessionalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TypeProfessionals
     * const typeProfessional = await prisma.typeProfessional.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TypeProfessionalUpdateManyArgs>(args: SelectSubset<T, TypeProfessionalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TypeProfessionals and returns the data updated in the database.
     * @param {TypeProfessionalUpdateManyAndReturnArgs} args - Arguments to update many TypeProfessionals.
     * @example
     * // Update many TypeProfessionals
     * const typeProfessional = await prisma.typeProfessional.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TypeProfessionals and only return the `id`
     * const typeProfessionalWithIdOnly = await prisma.typeProfessional.updateManyAndReturn({
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
    updateManyAndReturn<T extends TypeProfessionalUpdateManyAndReturnArgs>(args: SelectSubset<T, TypeProfessionalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TypeProfessionalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TypeProfessional.
     * @param {TypeProfessionalUpsertArgs} args - Arguments to update or create a TypeProfessional.
     * @example
     * // Update or create a TypeProfessional
     * const typeProfessional = await prisma.typeProfessional.upsert({
     *   create: {
     *     // ... data to create a TypeProfessional
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TypeProfessional we want to update
     *   }
     * })
     */
    upsert<T extends TypeProfessionalUpsertArgs>(args: SelectSubset<T, TypeProfessionalUpsertArgs<ExtArgs>>): Prisma__TypeProfessionalClient<$Result.GetResult<Prisma.$TypeProfessionalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TypeProfessionals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeProfessionalCountArgs} args - Arguments to filter TypeProfessionals to count.
     * @example
     * // Count the number of TypeProfessionals
     * const count = await prisma.typeProfessional.count({
     *   where: {
     *     // ... the filter for the TypeProfessionals we want to count
     *   }
     * })
    **/
    count<T extends TypeProfessionalCountArgs>(
      args?: Subset<T, TypeProfessionalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TypeProfessionalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TypeProfessional.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeProfessionalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TypeProfessionalAggregateArgs>(args: Subset<T, TypeProfessionalAggregateArgs>): Prisma.PrismaPromise<GetTypeProfessionalAggregateType<T>>

    /**
     * Group by TypeProfessional.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeProfessionalGroupByArgs} args - Group by arguments.
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
      T extends TypeProfessionalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TypeProfessionalGroupByArgs['orderBy'] }
        : { orderBy?: TypeProfessionalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TypeProfessionalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTypeProfessionalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TypeProfessional model
   */
  readonly fields: TypeProfessionalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TypeProfessional.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TypeProfessionalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    professionals<T extends TypeProfessional$professionalsArgs<ExtArgs> = {}>(args?: Subset<T, TypeProfessional$professionalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessionalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the TypeProfessional model
   */
  interface TypeProfessionalFieldRefs {
    readonly id: FieldRef<"TypeProfessional", 'Int'>
    readonly describe: FieldRef<"TypeProfessional", 'String'>
    readonly situation: FieldRef<"TypeProfessional", 'Boolean'>
    readonly updatedAt: FieldRef<"TypeProfessional", 'DateTime'>
    readonly createdAt: FieldRef<"TypeProfessional", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TypeProfessional findUnique
   */
  export type TypeProfessionalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeProfessional
     */
    select?: TypeProfessionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TypeProfessional
     */
    omit?: TypeProfessionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeProfessionalInclude<ExtArgs> | null
    /**
     * Filter, which TypeProfessional to fetch.
     */
    where: TypeProfessionalWhereUniqueInput
  }

  /**
   * TypeProfessional findUniqueOrThrow
   */
  export type TypeProfessionalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeProfessional
     */
    select?: TypeProfessionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TypeProfessional
     */
    omit?: TypeProfessionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeProfessionalInclude<ExtArgs> | null
    /**
     * Filter, which TypeProfessional to fetch.
     */
    where: TypeProfessionalWhereUniqueInput
  }

  /**
   * TypeProfessional findFirst
   */
  export type TypeProfessionalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeProfessional
     */
    select?: TypeProfessionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TypeProfessional
     */
    omit?: TypeProfessionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeProfessionalInclude<ExtArgs> | null
    /**
     * Filter, which TypeProfessional to fetch.
     */
    where?: TypeProfessionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TypeProfessionals to fetch.
     */
    orderBy?: TypeProfessionalOrderByWithRelationInput | TypeProfessionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TypeProfessionals.
     */
    cursor?: TypeProfessionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TypeProfessionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TypeProfessionals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TypeProfessionals.
     */
    distinct?: TypeProfessionalScalarFieldEnum | TypeProfessionalScalarFieldEnum[]
  }

  /**
   * TypeProfessional findFirstOrThrow
   */
  export type TypeProfessionalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeProfessional
     */
    select?: TypeProfessionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TypeProfessional
     */
    omit?: TypeProfessionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeProfessionalInclude<ExtArgs> | null
    /**
     * Filter, which TypeProfessional to fetch.
     */
    where?: TypeProfessionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TypeProfessionals to fetch.
     */
    orderBy?: TypeProfessionalOrderByWithRelationInput | TypeProfessionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TypeProfessionals.
     */
    cursor?: TypeProfessionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TypeProfessionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TypeProfessionals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TypeProfessionals.
     */
    distinct?: TypeProfessionalScalarFieldEnum | TypeProfessionalScalarFieldEnum[]
  }

  /**
   * TypeProfessional findMany
   */
  export type TypeProfessionalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeProfessional
     */
    select?: TypeProfessionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TypeProfessional
     */
    omit?: TypeProfessionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeProfessionalInclude<ExtArgs> | null
    /**
     * Filter, which TypeProfessionals to fetch.
     */
    where?: TypeProfessionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TypeProfessionals to fetch.
     */
    orderBy?: TypeProfessionalOrderByWithRelationInput | TypeProfessionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TypeProfessionals.
     */
    cursor?: TypeProfessionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TypeProfessionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TypeProfessionals.
     */
    skip?: number
    distinct?: TypeProfessionalScalarFieldEnum | TypeProfessionalScalarFieldEnum[]
  }

  /**
   * TypeProfessional create
   */
  export type TypeProfessionalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeProfessional
     */
    select?: TypeProfessionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TypeProfessional
     */
    omit?: TypeProfessionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeProfessionalInclude<ExtArgs> | null
    /**
     * The data needed to create a TypeProfessional.
     */
    data: XOR<TypeProfessionalCreateInput, TypeProfessionalUncheckedCreateInput>
  }

  /**
   * TypeProfessional createMany
   */
  export type TypeProfessionalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TypeProfessionals.
     */
    data: TypeProfessionalCreateManyInput | TypeProfessionalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TypeProfessional createManyAndReturn
   */
  export type TypeProfessionalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeProfessional
     */
    select?: TypeProfessionalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TypeProfessional
     */
    omit?: TypeProfessionalOmit<ExtArgs> | null
    /**
     * The data used to create many TypeProfessionals.
     */
    data: TypeProfessionalCreateManyInput | TypeProfessionalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TypeProfessional update
   */
  export type TypeProfessionalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeProfessional
     */
    select?: TypeProfessionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TypeProfessional
     */
    omit?: TypeProfessionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeProfessionalInclude<ExtArgs> | null
    /**
     * The data needed to update a TypeProfessional.
     */
    data: XOR<TypeProfessionalUpdateInput, TypeProfessionalUncheckedUpdateInput>
    /**
     * Choose, which TypeProfessional to update.
     */
    where: TypeProfessionalWhereUniqueInput
  }

  /**
   * TypeProfessional updateMany
   */
  export type TypeProfessionalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TypeProfessionals.
     */
    data: XOR<TypeProfessionalUpdateManyMutationInput, TypeProfessionalUncheckedUpdateManyInput>
    /**
     * Filter which TypeProfessionals to update
     */
    where?: TypeProfessionalWhereInput
    /**
     * Limit how many TypeProfessionals to update.
     */
    limit?: number
  }

  /**
   * TypeProfessional updateManyAndReturn
   */
  export type TypeProfessionalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeProfessional
     */
    select?: TypeProfessionalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TypeProfessional
     */
    omit?: TypeProfessionalOmit<ExtArgs> | null
    /**
     * The data used to update TypeProfessionals.
     */
    data: XOR<TypeProfessionalUpdateManyMutationInput, TypeProfessionalUncheckedUpdateManyInput>
    /**
     * Filter which TypeProfessionals to update
     */
    where?: TypeProfessionalWhereInput
    /**
     * Limit how many TypeProfessionals to update.
     */
    limit?: number
  }

  /**
   * TypeProfessional upsert
   */
  export type TypeProfessionalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeProfessional
     */
    select?: TypeProfessionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TypeProfessional
     */
    omit?: TypeProfessionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeProfessionalInclude<ExtArgs> | null
    /**
     * The filter to search for the TypeProfessional to update in case it exists.
     */
    where: TypeProfessionalWhereUniqueInput
    /**
     * In case the TypeProfessional found by the `where` argument doesn't exist, create a new TypeProfessional with this data.
     */
    create: XOR<TypeProfessionalCreateInput, TypeProfessionalUncheckedCreateInput>
    /**
     * In case the TypeProfessional was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TypeProfessionalUpdateInput, TypeProfessionalUncheckedUpdateInput>
  }

  /**
   * TypeProfessional delete
   */
  export type TypeProfessionalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeProfessional
     */
    select?: TypeProfessionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TypeProfessional
     */
    omit?: TypeProfessionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeProfessionalInclude<ExtArgs> | null
    /**
     * Filter which TypeProfessional to delete.
     */
    where: TypeProfessionalWhereUniqueInput
  }

  /**
   * TypeProfessional deleteMany
   */
  export type TypeProfessionalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TypeProfessionals to delete
     */
    where?: TypeProfessionalWhereInput
    /**
     * Limit how many TypeProfessionals to delete.
     */
    limit?: number
  }

  /**
   * TypeProfessional.professionals
   */
  export type TypeProfessional$professionalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professional
     */
    select?: ProfessionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professional
     */
    omit?: ProfessionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalInclude<ExtArgs> | null
    where?: ProfessionalWhereInput
    orderBy?: ProfessionalOrderByWithRelationInput | ProfessionalOrderByWithRelationInput[]
    cursor?: ProfessionalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProfessionalScalarFieldEnum | ProfessionalScalarFieldEnum[]
  }

  /**
   * TypeProfessional without action
   */
  export type TypeProfessionalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeProfessional
     */
    select?: TypeProfessionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TypeProfessional
     */
    omit?: TypeProfessionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeProfessionalInclude<ExtArgs> | null
  }


  /**
   * Model Professional
   */

  export type AggregateProfessional = {
    _count: ProfessionalCountAggregateOutputType | null
    _avg: ProfessionalAvgAggregateOutputType | null
    _sum: ProfessionalSumAggregateOutputType | null
    _min: ProfessionalMinAggregateOutputType | null
    _max: ProfessionalMaxAggregateOutputType | null
  }

  export type ProfessionalAvgAggregateOutputType = {
    id: number | null
    typeProfessionalId: number | null
  }

  export type ProfessionalSumAggregateOutputType = {
    id: number | null
    typeProfessionalId: number | null
  }

  export type ProfessionalMinAggregateOutputType = {
    id: number | null
    nome: string | null
    telephone: string | null
    email: string | null
    situation: boolean | null
    typeProfessionalId: number | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type ProfessionalMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    telephone: string | null
    email: string | null
    situation: boolean | null
    typeProfessionalId: number | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type ProfessionalCountAggregateOutputType = {
    id: number
    nome: number
    telephone: number
    email: number
    situation: number
    typeProfessionalId: number
    updatedAt: number
    createdAt: number
    _all: number
  }


  export type ProfessionalAvgAggregateInputType = {
    id?: true
    typeProfessionalId?: true
  }

  export type ProfessionalSumAggregateInputType = {
    id?: true
    typeProfessionalId?: true
  }

  export type ProfessionalMinAggregateInputType = {
    id?: true
    nome?: true
    telephone?: true
    email?: true
    situation?: true
    typeProfessionalId?: true
    updatedAt?: true
    createdAt?: true
  }

  export type ProfessionalMaxAggregateInputType = {
    id?: true
    nome?: true
    telephone?: true
    email?: true
    situation?: true
    typeProfessionalId?: true
    updatedAt?: true
    createdAt?: true
  }

  export type ProfessionalCountAggregateInputType = {
    id?: true
    nome?: true
    telephone?: true
    email?: true
    situation?: true
    typeProfessionalId?: true
    updatedAt?: true
    createdAt?: true
    _all?: true
  }

  export type ProfessionalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Professional to aggregate.
     */
    where?: ProfessionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professionals to fetch.
     */
    orderBy?: ProfessionalOrderByWithRelationInput | ProfessionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfessionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professionals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Professionals
    **/
    _count?: true | ProfessionalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfessionalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfessionalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfessionalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfessionalMaxAggregateInputType
  }

  export type GetProfessionalAggregateType<T extends ProfessionalAggregateArgs> = {
        [P in keyof T & keyof AggregateProfessional]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfessional[P]>
      : GetScalarType<T[P], AggregateProfessional[P]>
  }




  export type ProfessionalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfessionalWhereInput
    orderBy?: ProfessionalOrderByWithAggregationInput | ProfessionalOrderByWithAggregationInput[]
    by: ProfessionalScalarFieldEnum[] | ProfessionalScalarFieldEnum
    having?: ProfessionalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfessionalCountAggregateInputType | true
    _avg?: ProfessionalAvgAggregateInputType
    _sum?: ProfessionalSumAggregateInputType
    _min?: ProfessionalMinAggregateInputType
    _max?: ProfessionalMaxAggregateInputType
  }

  export type ProfessionalGroupByOutputType = {
    id: number
    nome: string
    telephone: string | null
    email: string | null
    situation: boolean
    typeProfessionalId: number
    updatedAt: Date
    createdAt: Date
    _count: ProfessionalCountAggregateOutputType | null
    _avg: ProfessionalAvgAggregateOutputType | null
    _sum: ProfessionalSumAggregateOutputType | null
    _min: ProfessionalMinAggregateOutputType | null
    _max: ProfessionalMaxAggregateOutputType | null
  }

  type GetProfessionalGroupByPayload<T extends ProfessionalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfessionalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfessionalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfessionalGroupByOutputType[P]>
            : GetScalarType<T[P], ProfessionalGroupByOutputType[P]>
        }
      >
    >


  export type ProfessionalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    telephone?: boolean
    email?: boolean
    situation?: boolean
    typeProfessionalId?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    typeProfessional?: boolean | TypeProfessionalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["professional"]>

  export type ProfessionalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    telephone?: boolean
    email?: boolean
    situation?: boolean
    typeProfessionalId?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    typeProfessional?: boolean | TypeProfessionalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["professional"]>

  export type ProfessionalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    telephone?: boolean
    email?: boolean
    situation?: boolean
    typeProfessionalId?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    typeProfessional?: boolean | TypeProfessionalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["professional"]>

  export type ProfessionalSelectScalar = {
    id?: boolean
    nome?: boolean
    telephone?: boolean
    email?: boolean
    situation?: boolean
    typeProfessionalId?: boolean
    updatedAt?: boolean
    createdAt?: boolean
  }

  export type ProfessionalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "telephone" | "email" | "situation" | "typeProfessionalId" | "updatedAt" | "createdAt", ExtArgs["result"]["professional"]>
  export type ProfessionalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    typeProfessional?: boolean | TypeProfessionalDefaultArgs<ExtArgs>
  }
  export type ProfessionalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    typeProfessional?: boolean | TypeProfessionalDefaultArgs<ExtArgs>
  }
  export type ProfessionalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    typeProfessional?: boolean | TypeProfessionalDefaultArgs<ExtArgs>
  }

  export type $ProfessionalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Professional"
    objects: {
      typeProfessional: Prisma.$TypeProfessionalPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      telephone: string | null
      email: string | null
      situation: boolean
      typeProfessionalId: number
      updatedAt: Date
      createdAt: Date
    }, ExtArgs["result"]["professional"]>
    composites: {}
  }

  type ProfessionalGetPayload<S extends boolean | null | undefined | ProfessionalDefaultArgs> = $Result.GetResult<Prisma.$ProfessionalPayload, S>

  type ProfessionalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfessionalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfessionalCountAggregateInputType | true
    }

  export interface ProfessionalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Professional'], meta: { name: 'Professional' } }
    /**
     * Find zero or one Professional that matches the filter.
     * @param {ProfessionalFindUniqueArgs} args - Arguments to find a Professional
     * @example
     * // Get one Professional
     * const professional = await prisma.professional.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfessionalFindUniqueArgs>(args: SelectSubset<T, ProfessionalFindUniqueArgs<ExtArgs>>): Prisma__ProfessionalClient<$Result.GetResult<Prisma.$ProfessionalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Professional that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfessionalFindUniqueOrThrowArgs} args - Arguments to find a Professional
     * @example
     * // Get one Professional
     * const professional = await prisma.professional.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfessionalFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfessionalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfessionalClient<$Result.GetResult<Prisma.$ProfessionalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Professional that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionalFindFirstArgs} args - Arguments to find a Professional
     * @example
     * // Get one Professional
     * const professional = await prisma.professional.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfessionalFindFirstArgs>(args?: SelectSubset<T, ProfessionalFindFirstArgs<ExtArgs>>): Prisma__ProfessionalClient<$Result.GetResult<Prisma.$ProfessionalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Professional that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionalFindFirstOrThrowArgs} args - Arguments to find a Professional
     * @example
     * // Get one Professional
     * const professional = await prisma.professional.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfessionalFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfessionalFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfessionalClient<$Result.GetResult<Prisma.$ProfessionalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Professionals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Professionals
     * const professionals = await prisma.professional.findMany()
     * 
     * // Get first 10 Professionals
     * const professionals = await prisma.professional.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const professionalWithIdOnly = await prisma.professional.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfessionalFindManyArgs>(args?: SelectSubset<T, ProfessionalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessionalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Professional.
     * @param {ProfessionalCreateArgs} args - Arguments to create a Professional.
     * @example
     * // Create one Professional
     * const Professional = await prisma.professional.create({
     *   data: {
     *     // ... data to create a Professional
     *   }
     * })
     * 
     */
    create<T extends ProfessionalCreateArgs>(args: SelectSubset<T, ProfessionalCreateArgs<ExtArgs>>): Prisma__ProfessionalClient<$Result.GetResult<Prisma.$ProfessionalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Professionals.
     * @param {ProfessionalCreateManyArgs} args - Arguments to create many Professionals.
     * @example
     * // Create many Professionals
     * const professional = await prisma.professional.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfessionalCreateManyArgs>(args?: SelectSubset<T, ProfessionalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Professionals and returns the data saved in the database.
     * @param {ProfessionalCreateManyAndReturnArgs} args - Arguments to create many Professionals.
     * @example
     * // Create many Professionals
     * const professional = await prisma.professional.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Professionals and only return the `id`
     * const professionalWithIdOnly = await prisma.professional.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfessionalCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfessionalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessionalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Professional.
     * @param {ProfessionalDeleteArgs} args - Arguments to delete one Professional.
     * @example
     * // Delete one Professional
     * const Professional = await prisma.professional.delete({
     *   where: {
     *     // ... filter to delete one Professional
     *   }
     * })
     * 
     */
    delete<T extends ProfessionalDeleteArgs>(args: SelectSubset<T, ProfessionalDeleteArgs<ExtArgs>>): Prisma__ProfessionalClient<$Result.GetResult<Prisma.$ProfessionalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Professional.
     * @param {ProfessionalUpdateArgs} args - Arguments to update one Professional.
     * @example
     * // Update one Professional
     * const professional = await prisma.professional.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfessionalUpdateArgs>(args: SelectSubset<T, ProfessionalUpdateArgs<ExtArgs>>): Prisma__ProfessionalClient<$Result.GetResult<Prisma.$ProfessionalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Professionals.
     * @param {ProfessionalDeleteManyArgs} args - Arguments to filter Professionals to delete.
     * @example
     * // Delete a few Professionals
     * const { count } = await prisma.professional.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfessionalDeleteManyArgs>(args?: SelectSubset<T, ProfessionalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Professionals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Professionals
     * const professional = await prisma.professional.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfessionalUpdateManyArgs>(args: SelectSubset<T, ProfessionalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Professionals and returns the data updated in the database.
     * @param {ProfessionalUpdateManyAndReturnArgs} args - Arguments to update many Professionals.
     * @example
     * // Update many Professionals
     * const professional = await prisma.professional.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Professionals and only return the `id`
     * const professionalWithIdOnly = await prisma.professional.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProfessionalUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfessionalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessionalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Professional.
     * @param {ProfessionalUpsertArgs} args - Arguments to update or create a Professional.
     * @example
     * // Update or create a Professional
     * const professional = await prisma.professional.upsert({
     *   create: {
     *     // ... data to create a Professional
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Professional we want to update
     *   }
     * })
     */
    upsert<T extends ProfessionalUpsertArgs>(args: SelectSubset<T, ProfessionalUpsertArgs<ExtArgs>>): Prisma__ProfessionalClient<$Result.GetResult<Prisma.$ProfessionalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Professionals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionalCountArgs} args - Arguments to filter Professionals to count.
     * @example
     * // Count the number of Professionals
     * const count = await prisma.professional.count({
     *   where: {
     *     // ... the filter for the Professionals we want to count
     *   }
     * })
    **/
    count<T extends ProfessionalCountArgs>(
      args?: Subset<T, ProfessionalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfessionalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Professional.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfessionalAggregateArgs>(args: Subset<T, ProfessionalAggregateArgs>): Prisma.PrismaPromise<GetProfessionalAggregateType<T>>

    /**
     * Group by Professional.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionalGroupByArgs} args - Group by arguments.
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
      T extends ProfessionalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfessionalGroupByArgs['orderBy'] }
        : { orderBy?: ProfessionalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProfessionalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfessionalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Professional model
   */
  readonly fields: ProfessionalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Professional.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfessionalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    typeProfessional<T extends TypeProfessionalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TypeProfessionalDefaultArgs<ExtArgs>>): Prisma__TypeProfessionalClient<$Result.GetResult<Prisma.$TypeProfessionalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Professional model
   */
  interface ProfessionalFieldRefs {
    readonly id: FieldRef<"Professional", 'Int'>
    readonly nome: FieldRef<"Professional", 'String'>
    readonly telephone: FieldRef<"Professional", 'String'>
    readonly email: FieldRef<"Professional", 'String'>
    readonly situation: FieldRef<"Professional", 'Boolean'>
    readonly typeProfessionalId: FieldRef<"Professional", 'Int'>
    readonly updatedAt: FieldRef<"Professional", 'DateTime'>
    readonly createdAt: FieldRef<"Professional", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Professional findUnique
   */
  export type ProfessionalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professional
     */
    select?: ProfessionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professional
     */
    omit?: ProfessionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalInclude<ExtArgs> | null
    /**
     * Filter, which Professional to fetch.
     */
    where: ProfessionalWhereUniqueInput
  }

  /**
   * Professional findUniqueOrThrow
   */
  export type ProfessionalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professional
     */
    select?: ProfessionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professional
     */
    omit?: ProfessionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalInclude<ExtArgs> | null
    /**
     * Filter, which Professional to fetch.
     */
    where: ProfessionalWhereUniqueInput
  }

  /**
   * Professional findFirst
   */
  export type ProfessionalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professional
     */
    select?: ProfessionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professional
     */
    omit?: ProfessionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalInclude<ExtArgs> | null
    /**
     * Filter, which Professional to fetch.
     */
    where?: ProfessionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professionals to fetch.
     */
    orderBy?: ProfessionalOrderByWithRelationInput | ProfessionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Professionals.
     */
    cursor?: ProfessionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professionals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Professionals.
     */
    distinct?: ProfessionalScalarFieldEnum | ProfessionalScalarFieldEnum[]
  }

  /**
   * Professional findFirstOrThrow
   */
  export type ProfessionalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professional
     */
    select?: ProfessionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professional
     */
    omit?: ProfessionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalInclude<ExtArgs> | null
    /**
     * Filter, which Professional to fetch.
     */
    where?: ProfessionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professionals to fetch.
     */
    orderBy?: ProfessionalOrderByWithRelationInput | ProfessionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Professionals.
     */
    cursor?: ProfessionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professionals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Professionals.
     */
    distinct?: ProfessionalScalarFieldEnum | ProfessionalScalarFieldEnum[]
  }

  /**
   * Professional findMany
   */
  export type ProfessionalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professional
     */
    select?: ProfessionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professional
     */
    omit?: ProfessionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalInclude<ExtArgs> | null
    /**
     * Filter, which Professionals to fetch.
     */
    where?: ProfessionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professionals to fetch.
     */
    orderBy?: ProfessionalOrderByWithRelationInput | ProfessionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Professionals.
     */
    cursor?: ProfessionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professionals.
     */
    skip?: number
    distinct?: ProfessionalScalarFieldEnum | ProfessionalScalarFieldEnum[]
  }

  /**
   * Professional create
   */
  export type ProfessionalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professional
     */
    select?: ProfessionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professional
     */
    omit?: ProfessionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalInclude<ExtArgs> | null
    /**
     * The data needed to create a Professional.
     */
    data: XOR<ProfessionalCreateInput, ProfessionalUncheckedCreateInput>
  }

  /**
   * Professional createMany
   */
  export type ProfessionalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Professionals.
     */
    data: ProfessionalCreateManyInput | ProfessionalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Professional createManyAndReturn
   */
  export type ProfessionalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professional
     */
    select?: ProfessionalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Professional
     */
    omit?: ProfessionalOmit<ExtArgs> | null
    /**
     * The data used to create many Professionals.
     */
    data: ProfessionalCreateManyInput | ProfessionalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Professional update
   */
  export type ProfessionalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professional
     */
    select?: ProfessionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professional
     */
    omit?: ProfessionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalInclude<ExtArgs> | null
    /**
     * The data needed to update a Professional.
     */
    data: XOR<ProfessionalUpdateInput, ProfessionalUncheckedUpdateInput>
    /**
     * Choose, which Professional to update.
     */
    where: ProfessionalWhereUniqueInput
  }

  /**
   * Professional updateMany
   */
  export type ProfessionalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Professionals.
     */
    data: XOR<ProfessionalUpdateManyMutationInput, ProfessionalUncheckedUpdateManyInput>
    /**
     * Filter which Professionals to update
     */
    where?: ProfessionalWhereInput
    /**
     * Limit how many Professionals to update.
     */
    limit?: number
  }

  /**
   * Professional updateManyAndReturn
   */
  export type ProfessionalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professional
     */
    select?: ProfessionalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Professional
     */
    omit?: ProfessionalOmit<ExtArgs> | null
    /**
     * The data used to update Professionals.
     */
    data: XOR<ProfessionalUpdateManyMutationInput, ProfessionalUncheckedUpdateManyInput>
    /**
     * Filter which Professionals to update
     */
    where?: ProfessionalWhereInput
    /**
     * Limit how many Professionals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Professional upsert
   */
  export type ProfessionalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professional
     */
    select?: ProfessionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professional
     */
    omit?: ProfessionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalInclude<ExtArgs> | null
    /**
     * The filter to search for the Professional to update in case it exists.
     */
    where: ProfessionalWhereUniqueInput
    /**
     * In case the Professional found by the `where` argument doesn't exist, create a new Professional with this data.
     */
    create: XOR<ProfessionalCreateInput, ProfessionalUncheckedCreateInput>
    /**
     * In case the Professional was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfessionalUpdateInput, ProfessionalUncheckedUpdateInput>
  }

  /**
   * Professional delete
   */
  export type ProfessionalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professional
     */
    select?: ProfessionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professional
     */
    omit?: ProfessionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalInclude<ExtArgs> | null
    /**
     * Filter which Professional to delete.
     */
    where: ProfessionalWhereUniqueInput
  }

  /**
   * Professional deleteMany
   */
  export type ProfessionalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Professionals to delete
     */
    where?: ProfessionalWhereInput
    /**
     * Limit how many Professionals to delete.
     */
    limit?: number
  }

  /**
   * Professional without action
   */
  export type ProfessionalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professional
     */
    select?: ProfessionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professional
     */
    omit?: ProfessionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalInclude<ExtArgs> | null
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


  export const TypeProfessionalScalarFieldEnum: {
    id: 'id',
    describe: 'describe',
    situation: 'situation',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt'
  };

  export type TypeProfessionalScalarFieldEnum = (typeof TypeProfessionalScalarFieldEnum)[keyof typeof TypeProfessionalScalarFieldEnum]


  export const ProfessionalScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    telephone: 'telephone',
    email: 'email',
    situation: 'situation',
    typeProfessionalId: 'typeProfessionalId',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt'
  };

  export type ProfessionalScalarFieldEnum = (typeof ProfessionalScalarFieldEnum)[keyof typeof ProfessionalScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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


  export type TypeProfessionalWhereInput = {
    AND?: TypeProfessionalWhereInput | TypeProfessionalWhereInput[]
    OR?: TypeProfessionalWhereInput[]
    NOT?: TypeProfessionalWhereInput | TypeProfessionalWhereInput[]
    id?: IntFilter<"TypeProfessional"> | number
    describe?: StringFilter<"TypeProfessional"> | string
    situation?: BoolFilter<"TypeProfessional"> | boolean
    updatedAt?: DateTimeFilter<"TypeProfessional"> | Date | string
    createdAt?: DateTimeFilter<"TypeProfessional"> | Date | string
    professionals?: ProfessionalListRelationFilter
  }

  export type TypeProfessionalOrderByWithRelationInput = {
    id?: SortOrder
    describe?: SortOrder
    situation?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    professionals?: ProfessionalOrderByRelationAggregateInput
  }

  export type TypeProfessionalWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TypeProfessionalWhereInput | TypeProfessionalWhereInput[]
    OR?: TypeProfessionalWhereInput[]
    NOT?: TypeProfessionalWhereInput | TypeProfessionalWhereInput[]
    describe?: StringFilter<"TypeProfessional"> | string
    situation?: BoolFilter<"TypeProfessional"> | boolean
    updatedAt?: DateTimeFilter<"TypeProfessional"> | Date | string
    createdAt?: DateTimeFilter<"TypeProfessional"> | Date | string
    professionals?: ProfessionalListRelationFilter
  }, "id">

  export type TypeProfessionalOrderByWithAggregationInput = {
    id?: SortOrder
    describe?: SortOrder
    situation?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    _count?: TypeProfessionalCountOrderByAggregateInput
    _avg?: TypeProfessionalAvgOrderByAggregateInput
    _max?: TypeProfessionalMaxOrderByAggregateInput
    _min?: TypeProfessionalMinOrderByAggregateInput
    _sum?: TypeProfessionalSumOrderByAggregateInput
  }

  export type TypeProfessionalScalarWhereWithAggregatesInput = {
    AND?: TypeProfessionalScalarWhereWithAggregatesInput | TypeProfessionalScalarWhereWithAggregatesInput[]
    OR?: TypeProfessionalScalarWhereWithAggregatesInput[]
    NOT?: TypeProfessionalScalarWhereWithAggregatesInput | TypeProfessionalScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TypeProfessional"> | number
    describe?: StringWithAggregatesFilter<"TypeProfessional"> | string
    situation?: BoolWithAggregatesFilter<"TypeProfessional"> | boolean
    updatedAt?: DateTimeWithAggregatesFilter<"TypeProfessional"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"TypeProfessional"> | Date | string
  }

  export type ProfessionalWhereInput = {
    AND?: ProfessionalWhereInput | ProfessionalWhereInput[]
    OR?: ProfessionalWhereInput[]
    NOT?: ProfessionalWhereInput | ProfessionalWhereInput[]
    id?: IntFilter<"Professional"> | number
    nome?: StringFilter<"Professional"> | string
    telephone?: StringNullableFilter<"Professional"> | string | null
    email?: StringNullableFilter<"Professional"> | string | null
    situation?: BoolFilter<"Professional"> | boolean
    typeProfessionalId?: IntFilter<"Professional"> | number
    updatedAt?: DateTimeFilter<"Professional"> | Date | string
    createdAt?: DateTimeFilter<"Professional"> | Date | string
    typeProfessional?: XOR<TypeProfessionalScalarRelationFilter, TypeProfessionalWhereInput>
  }

  export type ProfessionalOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    telephone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    situation?: SortOrder
    typeProfessionalId?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    typeProfessional?: TypeProfessionalOrderByWithRelationInput
  }

  export type ProfessionalWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProfessionalWhereInput | ProfessionalWhereInput[]
    OR?: ProfessionalWhereInput[]
    NOT?: ProfessionalWhereInput | ProfessionalWhereInput[]
    nome?: StringFilter<"Professional"> | string
    telephone?: StringNullableFilter<"Professional"> | string | null
    email?: StringNullableFilter<"Professional"> | string | null
    situation?: BoolFilter<"Professional"> | boolean
    typeProfessionalId?: IntFilter<"Professional"> | number
    updatedAt?: DateTimeFilter<"Professional"> | Date | string
    createdAt?: DateTimeFilter<"Professional"> | Date | string
    typeProfessional?: XOR<TypeProfessionalScalarRelationFilter, TypeProfessionalWhereInput>
  }, "id">

  export type ProfessionalOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    telephone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    situation?: SortOrder
    typeProfessionalId?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    _count?: ProfessionalCountOrderByAggregateInput
    _avg?: ProfessionalAvgOrderByAggregateInput
    _max?: ProfessionalMaxOrderByAggregateInput
    _min?: ProfessionalMinOrderByAggregateInput
    _sum?: ProfessionalSumOrderByAggregateInput
  }

  export type ProfessionalScalarWhereWithAggregatesInput = {
    AND?: ProfessionalScalarWhereWithAggregatesInput | ProfessionalScalarWhereWithAggregatesInput[]
    OR?: ProfessionalScalarWhereWithAggregatesInput[]
    NOT?: ProfessionalScalarWhereWithAggregatesInput | ProfessionalScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Professional"> | number
    nome?: StringWithAggregatesFilter<"Professional"> | string
    telephone?: StringNullableWithAggregatesFilter<"Professional"> | string | null
    email?: StringNullableWithAggregatesFilter<"Professional"> | string | null
    situation?: BoolWithAggregatesFilter<"Professional"> | boolean
    typeProfessionalId?: IntWithAggregatesFilter<"Professional"> | number
    updatedAt?: DateTimeWithAggregatesFilter<"Professional"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Professional"> | Date | string
  }

  export type TypeProfessionalCreateInput = {
    describe: string
    situation: boolean
    updatedAt?: Date | string
    createdAt?: Date | string
    professionals?: ProfessionalCreateNestedManyWithoutTypeProfessionalInput
  }

  export type TypeProfessionalUncheckedCreateInput = {
    id?: number
    describe: string
    situation: boolean
    updatedAt?: Date | string
    createdAt?: Date | string
    professionals?: ProfessionalUncheckedCreateNestedManyWithoutTypeProfessionalInput
  }

  export type TypeProfessionalUpdateInput = {
    describe?: StringFieldUpdateOperationsInput | string
    situation?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    professionals?: ProfessionalUpdateManyWithoutTypeProfessionalNestedInput
  }

  export type TypeProfessionalUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    describe?: StringFieldUpdateOperationsInput | string
    situation?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    professionals?: ProfessionalUncheckedUpdateManyWithoutTypeProfessionalNestedInput
  }

  export type TypeProfessionalCreateManyInput = {
    id?: number
    describe: string
    situation: boolean
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type TypeProfessionalUpdateManyMutationInput = {
    describe?: StringFieldUpdateOperationsInput | string
    situation?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TypeProfessionalUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    describe?: StringFieldUpdateOperationsInput | string
    situation?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfessionalCreateInput = {
    nome: string
    telephone?: string | null
    email?: string | null
    situation: boolean
    updatedAt?: Date | string
    createdAt?: Date | string
    typeProfessional: TypeProfessionalCreateNestedOneWithoutProfessionalsInput
  }

  export type ProfessionalUncheckedCreateInput = {
    id?: number
    nome: string
    telephone?: string | null
    email?: string | null
    situation: boolean
    typeProfessionalId: number
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type ProfessionalUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    situation?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    typeProfessional?: TypeProfessionalUpdateOneRequiredWithoutProfessionalsNestedInput
  }

  export type ProfessionalUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    situation?: BoolFieldUpdateOperationsInput | boolean
    typeProfessionalId?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfessionalCreateManyInput = {
    id?: number
    nome: string
    telephone?: string | null
    email?: string | null
    situation: boolean
    typeProfessionalId: number
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type ProfessionalUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    situation?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfessionalUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    situation?: BoolFieldUpdateOperationsInput | boolean
    typeProfessionalId?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type ProfessionalListRelationFilter = {
    every?: ProfessionalWhereInput
    some?: ProfessionalWhereInput
    none?: ProfessionalWhereInput
  }

  export type ProfessionalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TypeProfessionalCountOrderByAggregateInput = {
    id?: SortOrder
    describe?: SortOrder
    situation?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type TypeProfessionalAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TypeProfessionalMaxOrderByAggregateInput = {
    id?: SortOrder
    describe?: SortOrder
    situation?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type TypeProfessionalMinOrderByAggregateInput = {
    id?: SortOrder
    describe?: SortOrder
    situation?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type TypeProfessionalSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type TypeProfessionalScalarRelationFilter = {
    is?: TypeProfessionalWhereInput
    isNot?: TypeProfessionalWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProfessionalCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    telephone?: SortOrder
    email?: SortOrder
    situation?: SortOrder
    typeProfessionalId?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ProfessionalAvgOrderByAggregateInput = {
    id?: SortOrder
    typeProfessionalId?: SortOrder
  }

  export type ProfessionalMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    telephone?: SortOrder
    email?: SortOrder
    situation?: SortOrder
    typeProfessionalId?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ProfessionalMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    telephone?: SortOrder
    email?: SortOrder
    situation?: SortOrder
    typeProfessionalId?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ProfessionalSumOrderByAggregateInput = {
    id?: SortOrder
    typeProfessionalId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type ProfessionalCreateNestedManyWithoutTypeProfessionalInput = {
    create?: XOR<ProfessionalCreateWithoutTypeProfessionalInput, ProfessionalUncheckedCreateWithoutTypeProfessionalInput> | ProfessionalCreateWithoutTypeProfessionalInput[] | ProfessionalUncheckedCreateWithoutTypeProfessionalInput[]
    connectOrCreate?: ProfessionalCreateOrConnectWithoutTypeProfessionalInput | ProfessionalCreateOrConnectWithoutTypeProfessionalInput[]
    createMany?: ProfessionalCreateManyTypeProfessionalInputEnvelope
    connect?: ProfessionalWhereUniqueInput | ProfessionalWhereUniqueInput[]
  }

  export type ProfessionalUncheckedCreateNestedManyWithoutTypeProfessionalInput = {
    create?: XOR<ProfessionalCreateWithoutTypeProfessionalInput, ProfessionalUncheckedCreateWithoutTypeProfessionalInput> | ProfessionalCreateWithoutTypeProfessionalInput[] | ProfessionalUncheckedCreateWithoutTypeProfessionalInput[]
    connectOrCreate?: ProfessionalCreateOrConnectWithoutTypeProfessionalInput | ProfessionalCreateOrConnectWithoutTypeProfessionalInput[]
    createMany?: ProfessionalCreateManyTypeProfessionalInputEnvelope
    connect?: ProfessionalWhereUniqueInput | ProfessionalWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProfessionalUpdateManyWithoutTypeProfessionalNestedInput = {
    create?: XOR<ProfessionalCreateWithoutTypeProfessionalInput, ProfessionalUncheckedCreateWithoutTypeProfessionalInput> | ProfessionalCreateWithoutTypeProfessionalInput[] | ProfessionalUncheckedCreateWithoutTypeProfessionalInput[]
    connectOrCreate?: ProfessionalCreateOrConnectWithoutTypeProfessionalInput | ProfessionalCreateOrConnectWithoutTypeProfessionalInput[]
    upsert?: ProfessionalUpsertWithWhereUniqueWithoutTypeProfessionalInput | ProfessionalUpsertWithWhereUniqueWithoutTypeProfessionalInput[]
    createMany?: ProfessionalCreateManyTypeProfessionalInputEnvelope
    set?: ProfessionalWhereUniqueInput | ProfessionalWhereUniqueInput[]
    disconnect?: ProfessionalWhereUniqueInput | ProfessionalWhereUniqueInput[]
    delete?: ProfessionalWhereUniqueInput | ProfessionalWhereUniqueInput[]
    connect?: ProfessionalWhereUniqueInput | ProfessionalWhereUniqueInput[]
    update?: ProfessionalUpdateWithWhereUniqueWithoutTypeProfessionalInput | ProfessionalUpdateWithWhereUniqueWithoutTypeProfessionalInput[]
    updateMany?: ProfessionalUpdateManyWithWhereWithoutTypeProfessionalInput | ProfessionalUpdateManyWithWhereWithoutTypeProfessionalInput[]
    deleteMany?: ProfessionalScalarWhereInput | ProfessionalScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProfessionalUncheckedUpdateManyWithoutTypeProfessionalNestedInput = {
    create?: XOR<ProfessionalCreateWithoutTypeProfessionalInput, ProfessionalUncheckedCreateWithoutTypeProfessionalInput> | ProfessionalCreateWithoutTypeProfessionalInput[] | ProfessionalUncheckedCreateWithoutTypeProfessionalInput[]
    connectOrCreate?: ProfessionalCreateOrConnectWithoutTypeProfessionalInput | ProfessionalCreateOrConnectWithoutTypeProfessionalInput[]
    upsert?: ProfessionalUpsertWithWhereUniqueWithoutTypeProfessionalInput | ProfessionalUpsertWithWhereUniqueWithoutTypeProfessionalInput[]
    createMany?: ProfessionalCreateManyTypeProfessionalInputEnvelope
    set?: ProfessionalWhereUniqueInput | ProfessionalWhereUniqueInput[]
    disconnect?: ProfessionalWhereUniqueInput | ProfessionalWhereUniqueInput[]
    delete?: ProfessionalWhereUniqueInput | ProfessionalWhereUniqueInput[]
    connect?: ProfessionalWhereUniqueInput | ProfessionalWhereUniqueInput[]
    update?: ProfessionalUpdateWithWhereUniqueWithoutTypeProfessionalInput | ProfessionalUpdateWithWhereUniqueWithoutTypeProfessionalInput[]
    updateMany?: ProfessionalUpdateManyWithWhereWithoutTypeProfessionalInput | ProfessionalUpdateManyWithWhereWithoutTypeProfessionalInput[]
    deleteMany?: ProfessionalScalarWhereInput | ProfessionalScalarWhereInput[]
  }

  export type TypeProfessionalCreateNestedOneWithoutProfessionalsInput = {
    create?: XOR<TypeProfessionalCreateWithoutProfessionalsInput, TypeProfessionalUncheckedCreateWithoutProfessionalsInput>
    connectOrCreate?: TypeProfessionalCreateOrConnectWithoutProfessionalsInput
    connect?: TypeProfessionalWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type TypeProfessionalUpdateOneRequiredWithoutProfessionalsNestedInput = {
    create?: XOR<TypeProfessionalCreateWithoutProfessionalsInput, TypeProfessionalUncheckedCreateWithoutProfessionalsInput>
    connectOrCreate?: TypeProfessionalCreateOrConnectWithoutProfessionalsInput
    upsert?: TypeProfessionalUpsertWithoutProfessionalsInput
    connect?: TypeProfessionalWhereUniqueInput
    update?: XOR<XOR<TypeProfessionalUpdateToOneWithWhereWithoutProfessionalsInput, TypeProfessionalUpdateWithoutProfessionalsInput>, TypeProfessionalUncheckedUpdateWithoutProfessionalsInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type ProfessionalCreateWithoutTypeProfessionalInput = {
    nome: string
    telephone?: string | null
    email?: string | null
    situation: boolean
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type ProfessionalUncheckedCreateWithoutTypeProfessionalInput = {
    id?: number
    nome: string
    telephone?: string | null
    email?: string | null
    situation: boolean
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type ProfessionalCreateOrConnectWithoutTypeProfessionalInput = {
    where: ProfessionalWhereUniqueInput
    create: XOR<ProfessionalCreateWithoutTypeProfessionalInput, ProfessionalUncheckedCreateWithoutTypeProfessionalInput>
  }

  export type ProfessionalCreateManyTypeProfessionalInputEnvelope = {
    data: ProfessionalCreateManyTypeProfessionalInput | ProfessionalCreateManyTypeProfessionalInput[]
    skipDuplicates?: boolean
  }

  export type ProfessionalUpsertWithWhereUniqueWithoutTypeProfessionalInput = {
    where: ProfessionalWhereUniqueInput
    update: XOR<ProfessionalUpdateWithoutTypeProfessionalInput, ProfessionalUncheckedUpdateWithoutTypeProfessionalInput>
    create: XOR<ProfessionalCreateWithoutTypeProfessionalInput, ProfessionalUncheckedCreateWithoutTypeProfessionalInput>
  }

  export type ProfessionalUpdateWithWhereUniqueWithoutTypeProfessionalInput = {
    where: ProfessionalWhereUniqueInput
    data: XOR<ProfessionalUpdateWithoutTypeProfessionalInput, ProfessionalUncheckedUpdateWithoutTypeProfessionalInput>
  }

  export type ProfessionalUpdateManyWithWhereWithoutTypeProfessionalInput = {
    where: ProfessionalScalarWhereInput
    data: XOR<ProfessionalUpdateManyMutationInput, ProfessionalUncheckedUpdateManyWithoutTypeProfessionalInput>
  }

  export type ProfessionalScalarWhereInput = {
    AND?: ProfessionalScalarWhereInput | ProfessionalScalarWhereInput[]
    OR?: ProfessionalScalarWhereInput[]
    NOT?: ProfessionalScalarWhereInput | ProfessionalScalarWhereInput[]
    id?: IntFilter<"Professional"> | number
    nome?: StringFilter<"Professional"> | string
    telephone?: StringNullableFilter<"Professional"> | string | null
    email?: StringNullableFilter<"Professional"> | string | null
    situation?: BoolFilter<"Professional"> | boolean
    typeProfessionalId?: IntFilter<"Professional"> | number
    updatedAt?: DateTimeFilter<"Professional"> | Date | string
    createdAt?: DateTimeFilter<"Professional"> | Date | string
  }

  export type TypeProfessionalCreateWithoutProfessionalsInput = {
    describe: string
    situation: boolean
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type TypeProfessionalUncheckedCreateWithoutProfessionalsInput = {
    id?: number
    describe: string
    situation: boolean
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type TypeProfessionalCreateOrConnectWithoutProfessionalsInput = {
    where: TypeProfessionalWhereUniqueInput
    create: XOR<TypeProfessionalCreateWithoutProfessionalsInput, TypeProfessionalUncheckedCreateWithoutProfessionalsInput>
  }

  export type TypeProfessionalUpsertWithoutProfessionalsInput = {
    update: XOR<TypeProfessionalUpdateWithoutProfessionalsInput, TypeProfessionalUncheckedUpdateWithoutProfessionalsInput>
    create: XOR<TypeProfessionalCreateWithoutProfessionalsInput, TypeProfessionalUncheckedCreateWithoutProfessionalsInput>
    where?: TypeProfessionalWhereInput
  }

  export type TypeProfessionalUpdateToOneWithWhereWithoutProfessionalsInput = {
    where?: TypeProfessionalWhereInput
    data: XOR<TypeProfessionalUpdateWithoutProfessionalsInput, TypeProfessionalUncheckedUpdateWithoutProfessionalsInput>
  }

  export type TypeProfessionalUpdateWithoutProfessionalsInput = {
    describe?: StringFieldUpdateOperationsInput | string
    situation?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TypeProfessionalUncheckedUpdateWithoutProfessionalsInput = {
    id?: IntFieldUpdateOperationsInput | number
    describe?: StringFieldUpdateOperationsInput | string
    situation?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfessionalCreateManyTypeProfessionalInput = {
    id?: number
    nome: string
    telephone?: string | null
    email?: string | null
    situation: boolean
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type ProfessionalUpdateWithoutTypeProfessionalInput = {
    nome?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    situation?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfessionalUncheckedUpdateWithoutTypeProfessionalInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    situation?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfessionalUncheckedUpdateManyWithoutTypeProfessionalInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    situation?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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