---
id: scalars
title: Scalars
slug: scalars
---

## Boolean

The `Boolean` scalar type represents `true` or `false`.

## Date

An ISO-8601 encoded date string.

## DateTime

An ISO-8601 encoded UTC date string.

## Float

The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).

## GitObjectID

A Git object ID.

## GitRefname

A fully qualified reference name (e.g. `refs/heads/master`).

## GitSSHRemote

Git SSH string

## GitTimestamp

An ISO-8601 encoded date string. Unlike the DateTime type, GitTimestamp is not converted in UTC.

## HTML

A string containing HTML code.

## ID

The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.

## Int

The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.

## PreciseDateTime

An ISO-8601 encoded UTC date string with millisecond precision.

## String

The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.

## URI

An RFC 3986, RFC 3987, and RFC 6570 (level 4) compliant URI string.

## X509Certificate

A valid x509 certificate string

