---
id: queries
title: Queries
slug: queries
---

## codeOfConduct

**Type:** [CodeOfConduct](/github-example/objects#codeofconduct)

Look up a code of conduct by its key

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>key</code></td>
<td><a href="/github-example/scalars#string"><code>String!</code></a></td>
<td>
<p>The code of conduct&#39;s key</p>
</td>
</tr>
</tbody>
</table>

## codesOfConduct

**Type:** [[CodeOfConduct]](/github-example/objects#codeofconduct)

Look up a code of conduct by its key

## enterprise

**Type:** [Enterprise](/github-example/objects#enterprise)

Look up an enterprise by URL slug.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>invitationToken</code></td>
<td><a href="/github-example/scalars#string"><code>String</code></a></td>
<td>
<p>The enterprise invitation token.</p>
</td>
</tr>
<tr>
<td><code>slug</code></td>
<td><a href="/github-example/scalars#string"><code>String!</code></a></td>
<td>
<p>The enterprise URL slug.</p>
</td>
</tr>
</tbody>
</table>

## enterpriseAdministratorInvitation

**Type:** [EnterpriseAdministratorInvitation](/github-example/objects#enterpriseadministratorinvitation)

Look up a pending enterprise administrator invitation by invitee, enterprise and role.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>enterpriseSlug</code></td>
<td><a href="/github-example/scalars#string"><code>String!</code></a></td>
<td>
<p>The slug of the enterprise the user was invited to join.</p>
</td>
</tr>
<tr>
<td><code>role</code></td>
<td><a href="/github-example/enums#enterpriseadministratorrole"><code>EnterpriseAdministratorRole!</code></a></td>
<td>
<p>The role for the business member invitation.</p>
</td>
</tr>
<tr>
<td><code>userLogin</code></td>
<td><a href="/github-example/scalars#string"><code>String!</code></a></td>
<td>
<p>The login of the user invited to join the business.</p>
</td>
</tr>
</tbody>
</table>

## enterpriseAdministratorInvitationByToken

**Type:** [EnterpriseAdministratorInvitation](/github-example/objects#enterpriseadministratorinvitation)

Look up a pending enterprise administrator invitation by invitation token.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>invitationToken</code></td>
<td><a href="/github-example/scalars#string"><code>String!</code></a></td>
<td>
<p>The invitation token sent with the invitation email.</p>
</td>
</tr>
</tbody>
</table>

## license

**Type:** [License](/github-example/objects#license)

Look up an open source license by its key

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>key</code></td>
<td><a href="/github-example/scalars#string"><code>String!</code></a></td>
<td>
<p>The license&#39;s downcased SPDX ID</p>
</td>
</tr>
</tbody>
</table>

## licenses

**Type:** [[License]!](/github-example/objects#license)

Return a list of known open source licenses

## marketplaceCategories

**Type:** [[MarketplaceCategory!]!](/github-example/objects#marketplacecategory)

Get alphabetically sorted list of Marketplace categories

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>excludeEmpty</code></td>
<td><a href="/github-example/scalars#boolean"><code>Boolean</code></a></td>
<td>
<p>Exclude categories with no listings.</p>
</td>
</tr>
<tr>
<td><code>excludeSubcategories</code></td>
<td><a href="/github-example/scalars#boolean"><code>Boolean</code></a></td>
<td>
<p>Returns top level categories only, excluding any subcategories.</p>
</td>
</tr>
<tr>
<td><code>includeCategories</code></td>
<td><a href="/github-example/scalars#string"><code>[String!]</code></a></td>
<td>
<p>Return only the specified categories.</p>
</td>
</tr>
</tbody>
</table>

## marketplaceCategory

**Type:** [MarketplaceCategory](/github-example/objects#marketplacecategory)

Look up a Marketplace category by its slug.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>slug</code></td>
<td><a href="/github-example/scalars#string"><code>String!</code></a></td>
<td>
<p>The URL slug of the category.</p>
</td>
</tr>
<tr>
<td><code>useTopicAliases</code></td>
<td><a href="/github-example/scalars#boolean"><code>Boolean</code></a></td>
<td>
<p>Also check topic aliases for the category slug</p>
</td>
</tr>
</tbody>
</table>

## marketplaceListing

**Type:** [MarketplaceListing](/github-example/objects#marketplacelisting)

Look up a single Marketplace listing

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>slug</code></td>
<td><a href="/github-example/scalars#string"><code>String!</code></a></td>
<td>
<p>Select the listing that matches this slug. It&#39;s the short name of the listing used in its URL.</p>
</td>
</tr>
</tbody>
</table>

## marketplaceListings

**Type:** [MarketplaceListingConnection!](/github-example/objects#marketplacelistingconnection)

Look up Marketplace listings

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>adminId</code></td>
<td><a href="/github-example/scalars#id"><code>ID</code></a></td>
<td>
<p>Select listings that can be administered by the specified user.</p>
</td>
</tr>
<tr>
<td><code>after</code></td>
<td><a href="/github-example/scalars#string"><code>String</code></a></td>
<td>
<p>Returns the elements in the list that come after the specified cursor.</p>
</td>
</tr>
<tr>
<td><code>allStates</code></td>
<td><a href="/github-example/scalars#boolean"><code>Boolean</code></a></td>
<td>
<p>Select listings visible to the viewer even if they are not approved. If omitted or
false, only approved listings will be returned.</p>
</td>
</tr>
<tr>
<td><code>before</code></td>
<td><a href="/github-example/scalars#string"><code>String</code></a></td>
<td>
<p>Returns the elements in the list that come before the specified cursor.</p>
</td>
</tr>
<tr>
<td><code>categorySlug</code></td>
<td><a href="/github-example/scalars#string"><code>String</code></a></td>
<td>
<p>Select only listings with the given category.</p>
</td>
</tr>
<tr>
<td><code>first</code></td>
<td><a href="/github-example/scalars#int"><code>Int</code></a></td>
<td>
<p>Returns the first <em>n</em> elements from the list.</p>
</td>
</tr>
<tr>
<td><code>last</code></td>
<td><a href="/github-example/scalars#int"><code>Int</code></a></td>
<td>
<p>Returns the last <em>n</em> elements from the list.</p>
</td>
</tr>
<tr>
<td><code>organizationId</code></td>
<td><a href="/github-example/scalars#id"><code>ID</code></a></td>
<td>
<p>Select listings for products owned by the specified organization.</p>
</td>
</tr>
<tr>
<td><code>primaryCategoryOnly</code></td>
<td><a href="/github-example/scalars#boolean"><code>Boolean</code></a></td>
<td>
<p>Select only listings where the primary category matches the given category slug.</p>
</td>
</tr>
<tr>
<td><code>slugs</code></td>
<td><a href="/github-example/scalars#string"><code>[String]</code></a></td>
<td>
<p>Select the listings with these slugs, if they are visible to the viewer.</p>
</td>
</tr>
<tr>
<td><code>useTopicAliases</code></td>
<td><a href="/github-example/scalars#boolean"><code>Boolean</code></a></td>
<td>
<p>Also check topic aliases for the category slug</p>
</td>
</tr>
<tr>
<td><code>viewerCanAdmin</code></td>
<td><a href="/github-example/scalars#boolean"><code>Boolean</code></a></td>
<td>
<p>Select listings to which user has admin access. If omitted, listings visible to the
viewer are returned.</p>
</td>
</tr>
<tr>
<td><code>withFreeTrialsOnly</code></td>
<td><a href="/github-example/scalars#boolean"><code>Boolean</code></a></td>
<td>
<p>Select only listings that offer a free trial.</p>
</td>
</tr>
</tbody>
</table>

## meta

**Type:** [GitHubMetadata!](/github-example/objects#githubmetadata)

Return information about the GitHub instance

## node

**Type:** [Node](/github-example/interfaces#node)

Fetches an object given its ID.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>id</code></td>
<td><a href="/github-example/scalars#id"><code>ID!</code></a></td>
<td>
<p>ID of the object.</p>
</td>
</tr>
</tbody>
</table>

## nodes

**Type:** [[Node]!](/github-example/interfaces#node)

Lookup nodes by a list of IDs.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>ids</code></td>
<td><a href="/github-example/scalars#id"><code>[ID!]!</code></a></td>
<td>
<p>The list of node IDs.</p>
</td>
</tr>
</tbody>
</table>

## organization

**Type:** [Organization](/github-example/objects#organization)

Lookup a organization by login.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>login</code></td>
<td><a href="/github-example/scalars#string"><code>String!</code></a></td>
<td>
<p>The organization&#39;s login.</p>
</td>
</tr>
</tbody>
</table>

## rateLimit

**Type:** [RateLimit](/github-example/objects#ratelimit)

The client's rate limit information.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>dryRun</code></td>
<td><a href="/github-example/scalars#boolean"><code>Boolean</code></a></td>
<td>
<p>If true, calculate the cost for the query without evaluating it</p>
</td>
</tr>
</tbody>
</table>

## relay

**Type:** [Query!](/github-example/objects#query)

Hack to workaround https://github.com/facebook/relay/issues/112 re-exposing the root query object

## repository

**Type:** [Repository](/github-example/objects#repository)

Lookup a given repository by the owner and repository name.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>name</code></td>
<td><a href="/github-example/scalars#string"><code>String!</code></a></td>
<td>
<p>The name of the repository</p>
</td>
</tr>
<tr>
<td><code>owner</code></td>
<td><a href="/github-example/scalars#string"><code>String!</code></a></td>
<td>
<p>The login field of a user or organization</p>
</td>
</tr>
</tbody>
</table>

## repositoryOwner

**Type:** [RepositoryOwner](/github-example/interfaces#repositoryowner)

Lookup a repository owner (ie. either a User or an Organization) by login.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>login</code></td>
<td><a href="/github-example/scalars#string"><code>String!</code></a></td>
<td>
<p>The username to lookup the owner by.</p>
</td>
</tr>
</tbody>
</table>

## resource

**Type:** [UniformResourceLocatable](/github-example/interfaces#uniformresourcelocatable)

Lookup resource by a URL.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>url</code></td>
<td><a href="/github-example/scalars#uri"><code>URI!</code></a></td>
<td>
<p>The URL.</p>
</td>
</tr>
</tbody>
</table>

## search

**Type:** [SearchResultItemConnection!](/github-example/objects#searchresultitemconnection)

Perform a search across resources.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>after</code></td>
<td><a href="/github-example/scalars#string"><code>String</code></a></td>
<td>
<p>Returns the elements in the list that come after the specified cursor.</p>
</td>
</tr>
<tr>
<td><code>before</code></td>
<td><a href="/github-example/scalars#string"><code>String</code></a></td>
<td>
<p>Returns the elements in the list that come before the specified cursor.</p>
</td>
</tr>
<tr>
<td><code>first</code></td>
<td><a href="/github-example/scalars#int"><code>Int</code></a></td>
<td>
<p>Returns the first <em>n</em> elements from the list.</p>
</td>
</tr>
<tr>
<td><code>last</code></td>
<td><a href="/github-example/scalars#int"><code>Int</code></a></td>
<td>
<p>Returns the last <em>n</em> elements from the list.</p>
</td>
</tr>
<tr>
<td><code>query</code></td>
<td><a href="/github-example/scalars#string"><code>String!</code></a></td>
<td>
<p>The search string to look for.</p>
</td>
</tr>
<tr>
<td><code>type</code></td>
<td><a href="/github-example/enums#searchtype"><code>SearchType!</code></a></td>
<td>
<p>The types of search items to search within.</p>
</td>
</tr>
</tbody>
</table>

## securityAdvisories

**Type:** [SecurityAdvisoryConnection!](/github-example/objects#securityadvisoryconnection)

GitHub Security Advisories

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>after</code></td>
<td><a href="/github-example/scalars#string"><code>String</code></a></td>
<td>
<p>Returns the elements in the list that come after the specified cursor.</p>
</td>
</tr>
<tr>
<td><code>before</code></td>
<td><a href="/github-example/scalars#string"><code>String</code></a></td>
<td>
<p>Returns the elements in the list that come before the specified cursor.</p>
</td>
</tr>
<tr>
<td><code>first</code></td>
<td><a href="/github-example/scalars#int"><code>Int</code></a></td>
<td>
<p>Returns the first <em>n</em> elements from the list.</p>
</td>
</tr>
<tr>
<td><code>identifier</code></td>
<td><a href="/github-example/inputObjects#securityadvisoryidentifierfilter"><code>SecurityAdvisoryIdentifierFilter</code></a></td>
<td>
<p>Filter advisories by identifier, e.g. GHSA or CVE.</p>
</td>
</tr>
<tr>
<td><code>last</code></td>
<td><a href="/github-example/scalars#int"><code>Int</code></a></td>
<td>
<p>Returns the last <em>n</em> elements from the list.</p>
</td>
</tr>
<tr>
<td><code>orderBy</code></td>
<td><a href="/github-example/inputObjects#securityadvisoryorder"><code>SecurityAdvisoryOrder</code></a></td>
<td>
<p>Ordering options for the returned topics.</p>
</td>
</tr>
<tr>
<td><code>publishedSince</code></td>
<td><a href="/github-example/scalars#datetime"><code>DateTime</code></a></td>
<td>
<p>Filter advisories to those published since a time in the past.</p>
</td>
</tr>
<tr>
<td><code>updatedSince</code></td>
<td><a href="/github-example/scalars#datetime"><code>DateTime</code></a></td>
<td>
<p>Filter advisories to those updated since a time in the past.</p>
</td>
</tr>
</tbody>
</table>

## securityAdvisory

**Type:** [SecurityAdvisory](/github-example/objects#securityadvisory)

Fetch a Security Advisory by its GHSA ID

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>ghsaId</code></td>
<td><a href="/github-example/scalars#string"><code>String!</code></a></td>
<td>
<p>GitHub Security Advisory ID.</p>
</td>
</tr>
</tbody>
</table>

## securityVulnerabilities

**Type:** [SecurityVulnerabilityConnection!](/github-example/objects#securityvulnerabilityconnection)

Software Vulnerabilities documented by GitHub Security Advisories

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>after</code></td>
<td><a href="/github-example/scalars#string"><code>String</code></a></td>
<td>
<p>Returns the elements in the list that come after the specified cursor.</p>
</td>
</tr>
<tr>
<td><code>before</code></td>
<td><a href="/github-example/scalars#string"><code>String</code></a></td>
<td>
<p>Returns the elements in the list that come before the specified cursor.</p>
</td>
</tr>
<tr>
<td><code>ecosystem</code></td>
<td><a href="/github-example/enums#securityadvisoryecosystem"><code>SecurityAdvisoryEcosystem</code></a></td>
<td>
<p>An ecosystem to filter vulnerabilities by.</p>
</td>
</tr>
<tr>
<td><code>first</code></td>
<td><a href="/github-example/scalars#int"><code>Int</code></a></td>
<td>
<p>Returns the first <em>n</em> elements from the list.</p>
</td>
</tr>
<tr>
<td><code>last</code></td>
<td><a href="/github-example/scalars#int"><code>Int</code></a></td>
<td>
<p>Returns the last <em>n</em> elements from the list.</p>
</td>
</tr>
<tr>
<td><code>orderBy</code></td>
<td><a href="/github-example/inputObjects#securityvulnerabilityorder"><code>SecurityVulnerabilityOrder</code></a></td>
<td>
<p>Ordering options for the returned topics.</p>
</td>
</tr>
<tr>
<td><code>package</code></td>
<td><a href="/github-example/scalars#string"><code>String</code></a></td>
<td>
<p>A package name to filter vulnerabilities by.</p>
</td>
</tr>
<tr>
<td><code>severities</code></td>
<td><a href="/github-example/enums#securityadvisoryseverity"><code>[SecurityAdvisorySeverity!]</code></a></td>
<td>
<p>A list of severities to filter vulnerabilities by.</p>
</td>
</tr>
</tbody>
</table>

## sponsorables

**Type:** [SponsorableItemConnection!](/github-example/objects#sponsorableitemconnection)

Users and organizations who can be sponsored via GitHub Sponsors.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>after</code></td>
<td><a href="/github-example/scalars#string"><code>String</code></a></td>
<td>
<p>Returns the elements in the list that come after the specified cursor.</p>
</td>
</tr>
<tr>
<td><code>before</code></td>
<td><a href="/github-example/scalars#string"><code>String</code></a></td>
<td>
<p>Returns the elements in the list that come before the specified cursor.</p>
</td>
</tr>
<tr>
<td><code>dependencyEcosystem</code></td>
<td><a href="/github-example/enums#securityadvisoryecosystem"><code>SecurityAdvisoryEcosystem</code></a></td>
<td>
<p>Optional filter for which dependencies should be checked for sponsorable
owners. Only sponsorable owners of dependencies in this ecosystem will be
included. Used when onlyDependencies = true.</p>
</td>
</tr>
<tr>
<td><code>first</code></td>
<td><a href="/github-example/scalars#int"><code>Int</code></a></td>
<td>
<p>Returns the first <em>n</em> elements from the list.</p>
</td>
</tr>
<tr>
<td><code>last</code></td>
<td><a href="/github-example/scalars#int"><code>Int</code></a></td>
<td>
<p>Returns the last <em>n</em> elements from the list.</p>
</td>
</tr>
<tr>
<td><code>onlyDependencies</code></td>
<td><a href="/github-example/scalars#boolean"><code>Boolean</code></a></td>
<td>
<p>Whether only sponsorables who own the viewer&#39;s dependencies will be
returned. Must be authenticated to use. Can check an organization instead
for their dependencies owned by sponsorables by passing
orgLoginForDependencies.</p>
</td>
</tr>
<tr>
<td><code>orderBy</code></td>
<td><a href="/github-example/inputObjects#sponsorableorder"><code>SponsorableOrder</code></a></td>
<td>
<p>Ordering options for users and organizations returned from the connection.</p>
</td>
</tr>
<tr>
<td><code>orgLoginForDependencies</code></td>
<td><a href="/github-example/scalars#string"><code>String</code></a></td>
<td>
<p>Optional organization username for whose dependencies should be checked.
Used when onlyDependencies = true. Omit to check your own dependencies. If
you are not an administrator of the organization, only dependencies from its
public repositories will be considered.</p>
</td>
</tr>
</tbody>
</table>

## sponsorsListing

**Type:** [SponsorsListing](/github-example/objects#sponsorslisting)

Look up a single Sponsors Listing

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>slug</code></td>
<td><a href="/github-example/scalars#string"><code>String!</code></a></td>
<td>
<p>Select the Sponsors listing which matches this slug</p>
</td>
</tr>
</tbody>
</table>

## topic

**Type:** [Topic](/github-example/objects#topic)

Look up a topic by name.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>name</code></td>
<td><a href="/github-example/scalars#string"><code>String!</code></a></td>
<td>
<p>The topic&#39;s name.</p>
</td>
</tr>
</tbody>
</table>

## user

**Type:** [User](/github-example/objects#user)

Lookup a user by login.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>login</code></td>
<td><a href="/github-example/scalars#string"><code>String!</code></a></td>
<td>
<p>The user&#39;s login.</p>
</td>
</tr>
</tbody>
</table>

## viewer

**Type:** [User!](/github-example/objects#user)

The currently authenticated user.

