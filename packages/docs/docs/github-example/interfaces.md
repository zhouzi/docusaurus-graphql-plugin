---
id: interfaces
title: Interfaces
slug: interfaces
---

## Actor

Represents an object which can take actions on GitHub. Typically a User or Bot.

**Fields**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>avatarUrl</code></td>
<td><a href="/github-example/scalars#uri"><code>URI!</code></a></td>
<td>
<p>A URL pointing to the actor&#39;s public avatar.</p>

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>size</code></td>
<td><a href="/github-example/scalars#int"><code>Int</code></a></td>
<td>
<p>The size of the resulting square image.</p>
</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td><code>login</code></td>
<td><a href="/github-example/scalars#string"><code>String!</code></a></td>
<td>
<p>The username of the actor.</p>
</td>
</tr>
<tr>
<td><code>resourcePath</code></td>
<td><a href="/github-example/scalars#uri"><code>URI!</code></a></td>
<td>
<p>The HTTP path for this actor.</p>
</td>
</tr>
<tr>
<td><code>url</code></td>
<td><a href="/github-example/scalars#uri"><code>URI!</code></a></td>
<td>
<p>The HTTP URL for this actor.</p>
</td>
</tr>
</tbody>
</table>

## Assignable

An object that can have users assigned to it.

**Fields**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>assignees</code></td>
<td><a href="/github-example/objects#userconnection"><code>UserConnection!</code></a></td>
<td>
<p>A list of Users assigned to this object.</p>

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
</tbody>
</table>

</td>
</tr>
</tbody>
</table>

## AuditEntry

An entry in the audit log.

**Fields**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>action</code></td>
<td><a href="/github-example/scalars#string"><code>String!</code></a></td>
<td>
<p>The action name</p>
</td>
</tr>
<tr>
<td><code>actor</code></td>
<td><a href="/github-example/unions#auditentryactor"><code>AuditEntryActor</code></a></td>
<td>
<p>The user who initiated the action</p>
</td>
</tr>
<tr>
<td><code>actorIp</code></td>
<td><a href="/github-example/scalars#string"><code>String</code></a></td>
<td>
<p>The IP address of the actor</p>
</td>
</tr>
<tr>
<td><code>actorLocation</code></td>
<td><a href="/github-example/objects#actorlocation"><code>ActorLocation</code></a></td>
<td>
<p>A readable representation of the actor&#39;s location</p>
</td>
</tr>
<tr>
<td><code>actorLogin</code></td>
<td><a href="/github-example/scalars#string"><code>String</code></a></td>
<td>
<p>The username of the user who initiated the action</p>
</td>
</tr>
<tr>
<td><code>actorResourcePath</code></td>
<td><a href="/github-example/scalars#uri"><code>URI</code></a></td>
<td>
<p>The HTTP path for the actor.</p>
</td>
</tr>
<tr>
<td><code>actorUrl</code></td>
<td><a href="/github-example/scalars#uri"><code>URI</code></a></td>
<td>
<p>The HTTP URL for the actor.</p>
</td>
</tr>
<tr>
<td><code>createdAt</code></td>
<td><a href="/github-example/scalars#precisedatetime"><code>PreciseDateTime!</code></a></td>
<td>
<p>The time the action was initiated</p>
</td>
</tr>
<tr>
<td><code>operationType</code></td>
<td><a href="/github-example/enums#operationtype"><code>OperationType</code></a></td>
<td>
<p>The corresponding operation type for the action</p>
</td>
</tr>
<tr>
<td><code>user</code></td>
<td><a href="/github-example/objects#user"><code>User</code></a></td>
<td>
<p>The user affected by the action</p>
</td>
</tr>
<tr>
<td><code>userLogin</code></td>
<td><a href="/github-example/scalars#string"><code>String</code></a></td>
<td>
<p>For actions involving two users, the actor is the initiator and the user is the affected user.</p>
</td>
</tr>
<tr>
<td><code>userResourcePath</code></td>
<td><a href="/github-example/scalars#uri"><code>URI</code></a></td>
<td>
<p>The HTTP path for the user.</p>
</td>
</tr>
<tr>
<td><code>userUrl</code></td>
<td><a href="/github-example/scalars#uri"><code>URI</code></a></td>
<td>
<p>The HTTP URL for the user.</p>
</td>
</tr>
</tbody>
</table>

## Closable

An object that can be closed

**Fields**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>closed</code></td>
<td><a href="/github-example/scalars#boolean"><code>Boolean!</code></a></td>
<td>
<p><code>true</code> if the object is closed (definition of closed may depend on type)</p>
</td>
</tr>
<tr>
<td><code>closedAt</code></td>
<td><a href="/github-example/scalars#datetime"><code>DateTime</code></a></td>
<td>
<p>Identifies the date and time when the object was closed.</p>
</td>
</tr>
</tbody>
</table>

## Comment

Represents a comment.

**Fields**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>author</code></td>
<td><a href="/github-example/interfaces#actor"><code>Actor</code></a></td>
<td>
<p>The actor who authored the comment.</p>
</td>
</tr>
<tr>
<td><code>authorAssociation</code></td>
<td><a href="/github-example/enums#commentauthorassociation"><code>CommentAuthorAssociation!</code></a></td>
<td>
<p>Author&#39;s association with the subject of the comment.</p>
</td>
</tr>
<tr>
<td><code>body</code></td>
<td><a href="/github-example/scalars#string"><code>String!</code></a></td>
<td>
<p>The body as Markdown.</p>
</td>
</tr>
<tr>
<td><code>bodyHTML</code></td>
<td><a href="/github-example/scalars#html"><code>HTML!</code></a></td>
<td>
<p>The body rendered to HTML.</p>
</td>
</tr>
<tr>
<td><code>bodyText</code></td>
<td><a href="/github-example/scalars#string"><code>String!</code></a></td>
<td>
<p>The body rendered to text.</p>
</td>
</tr>
<tr>
<td><code>createdAt</code></td>
<td><a href="/github-example/scalars#datetime"><code>DateTime!</code></a></td>
<td>
<p>Identifies the date and time when the object was created.</p>
</td>
</tr>
<tr>
<td><code>createdViaEmail</code></td>
<td><a href="/github-example/scalars#boolean"><code>Boolean!</code></a></td>
<td>
<p>Check if this comment was created via an email reply.</p>
</td>
</tr>
<tr>
<td><code>editor</code></td>
<td><a href="/github-example/interfaces#actor"><code>Actor</code></a></td>
<td>
<p>The actor who edited the comment.</p>
</td>
</tr>
<tr>
<td><code>id</code></td>
<td><a href="/github-example/scalars#id"><code>ID!</code></a></td>
<td>

</td>
</tr>
<tr>
<td><code>includesCreatedEdit</code></td>
<td><a href="/github-example/scalars#boolean"><code>Boolean!</code></a></td>
<td>
<p>Check if this comment was edited and includes an edit with the creation data</p>
</td>
</tr>
<tr>
<td><code>lastEditedAt</code></td>
<td><a href="/github-example/scalars#datetime"><code>DateTime</code></a></td>
<td>
<p>The moment the editor made the last edit</p>
</td>
</tr>
<tr>
<td><code>publishedAt</code></td>
<td><a href="/github-example/scalars#datetime"><code>DateTime</code></a></td>
<td>
<p>Identifies when the comment was published at.</p>
</td>
</tr>
<tr>
<td><code>updatedAt</code></td>
<td><a href="/github-example/scalars#datetime"><code>DateTime!</code></a></td>
<td>
<p>Identifies the date and time when the object was last updated.</p>
</td>
</tr>
<tr>
<td><code>userContentEdits</code></td>
<td><a href="/github-example/objects#usercontenteditconnection"><code>UserContentEditConnection</code></a></td>
<td>
<p>A list of edits to this content.</p>

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
</tbody>
</table>

</td>
</tr>
<tr>
<td><code>viewerDidAuthor</code></td>
<td><a href="/github-example/scalars#boolean"><code>Boolean!</code></a></td>
<td>
<p>Did the viewer author this comment.</p>
</td>
</tr>
</tbody>
</table>

## Contribution

Represents a contribution a user made on GitHub, such as opening an issue.

**Fields**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>isRestricted</code></td>
<td><a href="/github-example/scalars#boolean"><code>Boolean!</code></a></td>
<td>
<p>Whether this contribution is associated with a record you do not have access to. For
example, your own &#39;first issue&#39; contribution may have been made on a repository you can no
longer access.</p>
</td>
</tr>
<tr>
<td><code>occurredAt</code></td>
<td><a href="/github-example/scalars#datetime"><code>DateTime!</code></a></td>
<td>
<p>When this contribution was made.</p>
</td>
</tr>
<tr>
<td><code>resourcePath</code></td>
<td><a href="/github-example/scalars#uri"><code>URI!</code></a></td>
<td>
<p>The HTTP path for this contribution.</p>
</td>
</tr>
<tr>
<td><code>url</code></td>
<td><a href="/github-example/scalars#uri"><code>URI!</code></a></td>
<td>
<p>The HTTP URL for this contribution.</p>
</td>
</tr>
<tr>
<td><code>user</code></td>
<td><a href="/github-example/objects#user"><code>User!</code></a></td>
<td>
<p>The user who made this contribution.</p>
</td>
</tr>
</tbody>
</table>

## Deletable

Entities that can be deleted.

**Fields**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>viewerCanDelete</code></td>
<td><a href="/github-example/scalars#boolean"><code>Boolean!</code></a></td>
<td>
<p>Check if the current viewer can delete this object.</p>
</td>
</tr>
</tbody>
</table>

## EnterpriseAuditEntryData

Metadata for an audit entry containing enterprise account information.

**Fields**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>enterpriseResourcePath</code></td>
<td><a href="/github-example/scalars#uri"><code>URI</code></a></td>
<td>
<p>The HTTP path for this enterprise.</p>
</td>
</tr>
<tr>
<td><code>enterpriseSlug</code></td>
<td><a href="/github-example/scalars#string"><code>String</code></a></td>
<td>
<p>The slug of the enterprise.</p>
</td>
</tr>
<tr>
<td><code>enterpriseUrl</code></td>
<td><a href="/github-example/scalars#uri"><code>URI</code></a></td>
<td>
<p>The HTTP URL for this enterprise.</p>
</td>
</tr>
</tbody>
</table>

## GitObject

Represents a Git object.

**Fields**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>abbreviatedOid</code></td>
<td><a href="/github-example/scalars#string"><code>String!</code></a></td>
<td>
<p>An abbreviated version of the Git object ID</p>
</td>
</tr>
<tr>
<td><code>commitResourcePath</code></td>
<td><a href="/github-example/scalars#uri"><code>URI!</code></a></td>
<td>
<p>The HTTP path for this Git object</p>
</td>
</tr>
<tr>
<td><code>commitUrl</code></td>
<td><a href="/github-example/scalars#uri"><code>URI!</code></a></td>
<td>
<p>The HTTP URL for this Git object</p>
</td>
</tr>
<tr>
<td><code>id</code></td>
<td><a href="/github-example/scalars#id"><code>ID!</code></a></td>
<td>

</td>
</tr>
<tr>
<td><code>oid</code></td>
<td><a href="/github-example/scalars#gitobjectid"><code>GitObjectID!</code></a></td>
<td>
<p>The Git object ID</p>
</td>
</tr>
<tr>
<td><code>repository</code></td>
<td><a href="/github-example/objects#repository"><code>Repository!</code></a></td>
<td>
<p>The Repository the Git object belongs to</p>
</td>
</tr>
</tbody>
</table>

## GitSignature

Information about a signature (GPG or S/MIME) on a Commit or Tag.

**Fields**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>email</code></td>
<td><a href="/github-example/scalars#string"><code>String!</code></a></td>
<td>
<p>Email used to sign this object.</p>
</td>
</tr>
<tr>
<td><code>isValid</code></td>
<td><a href="/github-example/scalars#boolean"><code>Boolean!</code></a></td>
<td>
<p>True if the signature is valid and verified by GitHub.</p>
</td>
</tr>
<tr>
<td><code>payload</code></td>
<td><a href="/github-example/scalars#string"><code>String!</code></a></td>
<td>
<p>Payload for GPG signing object. Raw ODB object without the signature header.</p>
</td>
</tr>
<tr>
<td><code>signature</code></td>
<td><a href="/github-example/scalars#string"><code>String!</code></a></td>
<td>
<p>ASCII-armored signature header from object.</p>
</td>
</tr>
<tr>
<td><code>signer</code></td>
<td><a href="/github-example/objects#user"><code>User</code></a></td>
<td>
<p>GitHub user corresponding to the email signing this commit.</p>
</td>
</tr>
<tr>
<td><code>state</code></td>
<td><a href="/github-example/enums#gitsignaturestate"><code>GitSignatureState!</code></a></td>
<td>
<p>The state of this signature. <code>VALID</code> if signature is valid and verified by
GitHub, otherwise represents reason why signature is considered invalid.</p>
</td>
</tr>
<tr>
<td><code>wasSignedByGitHub</code></td>
<td><a href="/github-example/scalars#boolean"><code>Boolean!</code></a></td>
<td>
<p>True if the signature was made with GitHub&#39;s signing key.</p>
</td>
</tr>
</tbody>
</table>

## HovercardContext

An individual line of a hovercard

**Fields**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>message</code></td>
<td><a href="/github-example/scalars#string"><code>String!</code></a></td>
<td>
<p>A string describing this context</p>
</td>
</tr>
<tr>
<td><code>octicon</code></td>
<td><a href="/github-example/scalars#string"><code>String!</code></a></td>
<td>
<p>An octicon to accompany this context</p>
</td>
</tr>
</tbody>
</table>

## Labelable

An object that can have labels assigned to it.

**Fields**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>labels</code></td>
<td><a href="/github-example/objects#labelconnection"><code>LabelConnection</code></a></td>
<td>
<p>A list of labels associated with the object.</p>

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
<td><code>orderBy</code></td>
<td><a href="/github-example/inputObjects#labelorder"><code>LabelOrder</code></a></td>
<td>
<p>Ordering options for labels returned from the connection.</p>
</td>
</tr>
</tbody>
</table>

</td>
</tr>
</tbody>
</table>

## Lockable

An object that can be locked.

**Fields**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>activeLockReason</code></td>
<td><a href="/github-example/enums#lockreason"><code>LockReason</code></a></td>
<td>
<p>Reason that the conversation was locked.</p>
</td>
</tr>
<tr>
<td><code>locked</code></td>
<td><a href="/github-example/scalars#boolean"><code>Boolean!</code></a></td>
<td>
<p><code>true</code> if the object is locked</p>
</td>
</tr>
</tbody>
</table>

## MemberStatusable

Entities that have members who can set status messages.

**Fields**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>memberStatuses</code></td>
<td><a href="/github-example/objects#userstatusconnection"><code>UserStatusConnection!</code></a></td>
<td>
<p>Get the status messages members of this entity have set that are either public or visible only to the organization.</p>

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
<td><code>orderBy</code></td>
<td><a href="/github-example/inputObjects#userstatusorder"><code>UserStatusOrder</code></a></td>
<td>
<p>Ordering options for user statuses returned from the connection.</p>
</td>
</tr>
</tbody>
</table>

</td>
</tr>
</tbody>
</table>

## Minimizable

Entities that can be minimized.

**Fields**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>isMinimized</code></td>
<td><a href="/github-example/scalars#boolean"><code>Boolean!</code></a></td>
<td>
<p>Returns whether or not a comment has been minimized.</p>
</td>
</tr>
<tr>
<td><code>minimizedReason</code></td>
<td><a href="/github-example/scalars#string"><code>String</code></a></td>
<td>
<p>Returns why the comment was minimized.</p>
</td>
</tr>
<tr>
<td><code>viewerCanMinimize</code></td>
<td><a href="/github-example/scalars#boolean"><code>Boolean!</code></a></td>
<td>
<p>Check if the current viewer can minimize this object.</p>
</td>
</tr>
</tbody>
</table>

## Node

An object with an ID.

**Fields**

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

## OauthApplicationAuditEntryData

Metadata for an audit entry with action oauth_application.*

**Fields**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>oauthApplicationName</code></td>
<td><a href="/github-example/scalars#string"><code>String</code></a></td>
<td>
<p>The name of the OAuth Application.</p>
</td>
</tr>
<tr>
<td><code>oauthApplicationResourcePath</code></td>
<td><a href="/github-example/scalars#uri"><code>URI</code></a></td>
<td>
<p>The HTTP path for the OAuth Application</p>
</td>
</tr>
<tr>
<td><code>oauthApplicationUrl</code></td>
<td><a href="/github-example/scalars#uri"><code>URI</code></a></td>
<td>
<p>The HTTP URL for the OAuth Application</p>
</td>
</tr>
</tbody>
</table>

## OrganizationAuditEntryData

Metadata for an audit entry with action org.*

**Fields**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>organization</code></td>
<td><a href="/github-example/objects#organization"><code>Organization</code></a></td>
<td>
<p>The Organization associated with the Audit Entry.</p>
</td>
</tr>
<tr>
<td><code>organizationName</code></td>
<td><a href="/github-example/scalars#string"><code>String</code></a></td>
<td>
<p>The name of the Organization.</p>
</td>
</tr>
<tr>
<td><code>organizationResourcePath</code></td>
<td><a href="/github-example/scalars#uri"><code>URI</code></a></td>
<td>
<p>The HTTP path for the organization</p>
</td>
</tr>
<tr>
<td><code>organizationUrl</code></td>
<td><a href="/github-example/scalars#uri"><code>URI</code></a></td>
<td>
<p>The HTTP URL for the organization</p>
</td>
</tr>
</tbody>
</table>

## PackageOwner

Represents an owner of a package.

**Fields**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>id</code></td>
<td><a href="/github-example/scalars#id"><code>ID!</code></a></td>
<td>

</td>
</tr>
<tr>
<td><code>packages</code></td>
<td><a href="/github-example/objects#packageconnection"><code>PackageConnection!</code></a></td>
<td>
<p>A list of packages under the owner.</p>

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
<td><code>names</code></td>
<td><a href="/github-example/scalars#string"><code>[String]</code></a></td>
<td>
<p>Find packages by their names.</p>
</td>
</tr>
<tr>
<td><code>orderBy</code></td>
<td><a href="/github-example/inputObjects#packageorder"><code>PackageOrder</code></a></td>
<td>
<p>Ordering of the returned packages.</p>
</td>
</tr>
<tr>
<td><code>packageType</code></td>
<td><a href="/github-example/enums#packagetype"><code>PackageType</code></a></td>
<td>
<p>Filter registry package by type.</p>
</td>
</tr>
<tr>
<td><code>repositoryId</code></td>
<td><a href="/github-example/scalars#id"><code>ID</code></a></td>
<td>
<p>Find packages in a repository by ID.</p>
</td>
</tr>
</tbody>
</table>

</td>
</tr>
</tbody>
</table>

## ProfileOwner

Represents any entity on GitHub that has a profile page.

**Fields**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>anyPinnableItems</code></td>
<td><a href="/github-example/scalars#boolean"><code>Boolean!</code></a></td>
<td>
<p>Determine if this repository owner has any items that can be pinned to their profile.</p>

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>type</code></td>
<td><a href="/github-example/enums#pinnableitemtype"><code>PinnableItemType</code></a></td>
<td>
<p>Filter to only a particular kind of pinnable item.</p>
</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td><code>email</code></td>
<td><a href="/github-example/scalars#string"><code>String</code></a></td>
<td>
<p>The public profile email.</p>
</td>
</tr>
<tr>
<td><code>id</code></td>
<td><a href="/github-example/scalars#id"><code>ID!</code></a></td>
<td>

</td>
</tr>
<tr>
<td><code>itemShowcase</code></td>
<td><a href="/github-example/objects#profileitemshowcase"><code>ProfileItemShowcase!</code></a></td>
<td>
<p>Showcases a selection of repositories and gists that the profile owner has
either curated or that have been selected automatically based on popularity.</p>
</td>
</tr>
<tr>
<td><code>location</code></td>
<td><a href="/github-example/scalars#string"><code>String</code></a></td>
<td>
<p>The public profile location.</p>
</td>
</tr>
<tr>
<td><code>login</code></td>
<td><a href="/github-example/scalars#string"><code>String!</code></a></td>
<td>
<p>The username used to login.</p>
</td>
</tr>
<tr>
<td><code>name</code></td>
<td><a href="/github-example/scalars#string"><code>String</code></a></td>
<td>
<p>The public profile name.</p>
</td>
</tr>
<tr>
<td><code>pinnableItems</code></td>
<td><a href="/github-example/objects#pinnableitemconnection"><code>PinnableItemConnection!</code></a></td>
<td>
<p>A list of repositories and gists this profile owner can pin to their profile.</p>

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
<td><code>types</code></td>
<td><a href="/github-example/enums#pinnableitemtype"><code>[PinnableItemType!]</code></a></td>
<td>
<p>Filter the types of pinnable items that are returned.</p>
</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td><code>pinnedItems</code></td>
<td><a href="/github-example/objects#pinnableitemconnection"><code>PinnableItemConnection!</code></a></td>
<td>
<p>A list of repositories and gists this profile owner has pinned to their profile</p>

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
<td><code>types</code></td>
<td><a href="/github-example/enums#pinnableitemtype"><code>[PinnableItemType!]</code></a></td>
<td>
<p>Filter the types of pinned items that are returned.</p>
</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td><code>pinnedItemsRemaining</code></td>
<td><a href="/github-example/scalars#int"><code>Int!</code></a></td>
<td>
<p>Returns how many more items this profile owner can pin to their profile.</p>
</td>
</tr>
<tr>
<td><code>viewerCanChangePinnedItems</code></td>
<td><a href="/github-example/scalars#boolean"><code>Boolean!</code></a></td>
<td>
<p>Can the viewer pin repositories and gists to the profile?</p>
</td>
</tr>
<tr>
<td><code>websiteUrl</code></td>
<td><a href="/github-example/scalars#uri"><code>URI</code></a></td>
<td>
<p>The public profile website URL.</p>
</td>
</tr>
</tbody>
</table>

## ProjectOwner

Represents an owner of a Project.

**Fields**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>id</code></td>
<td><a href="/github-example/scalars#id"><code>ID!</code></a></td>
<td>

</td>
</tr>
<tr>
<td><code>project</code></td>
<td><a href="/github-example/objects#project"><code>Project</code></a></td>
<td>
<p>Find project by number.</p>

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>number</code></td>
<td><a href="/github-example/scalars#int"><code>Int!</code></a></td>
<td>
<p>The project number to find.</p>
</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td><code>projects</code></td>
<td><a href="/github-example/objects#projectconnection"><code>ProjectConnection!</code></a></td>
<td>
<p>A list of projects under the owner.</p>

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
<td><code>orderBy</code></td>
<td><a href="/github-example/inputObjects#projectorder"><code>ProjectOrder</code></a></td>
<td>
<p>Ordering options for projects returned from the connection</p>
</td>
</tr>
<tr>
<td><code>search</code></td>
<td><a href="/github-example/scalars#string"><code>String</code></a></td>
<td>
<p>Query to search projects by, currently only searching by name.</p>
</td>
</tr>
<tr>
<td><code>states</code></td>
<td><a href="/github-example/enums#projectstate"><code>[ProjectState!]</code></a></td>
<td>
<p>A list of states to filter the projects by.</p>
</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td><code>projectsResourcePath</code></td>
<td><a href="/github-example/scalars#uri"><code>URI!</code></a></td>
<td>
<p>The HTTP path listing owners projects</p>
</td>
</tr>
<tr>
<td><code>projectsUrl</code></td>
<td><a href="/github-example/scalars#uri"><code>URI!</code></a></td>
<td>
<p>The HTTP URL listing owners projects</p>
</td>
</tr>
<tr>
<td><code>viewerCanCreateProjects</code></td>
<td><a href="/github-example/scalars#boolean"><code>Boolean!</code></a></td>
<td>
<p>Can the current viewer create new projects on this owner.</p>
</td>
</tr>
</tbody>
</table>

## Reactable

Represents a subject that can be reacted on.

**Fields**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>databaseId</code></td>
<td><a href="/github-example/scalars#int"><code>Int</code></a></td>
<td>
<p>Identifies the primary key from the database.</p>
</td>
</tr>
<tr>
<td><code>id</code></td>
<td><a href="/github-example/scalars#id"><code>ID!</code></a></td>
<td>

</td>
</tr>
<tr>
<td><code>reactionGroups</code></td>
<td><a href="/github-example/objects#reactiongroup"><code>[ReactionGroup!]</code></a></td>
<td>
<p>A list of reactions grouped by content left on the subject.</p>
</td>
</tr>
<tr>
<td><code>reactions</code></td>
<td><a href="/github-example/objects#reactionconnection"><code>ReactionConnection!</code></a></td>
<td>
<p>A list of Reactions left on the Issue.</p>

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
<td><code>content</code></td>
<td><a href="/github-example/enums#reactioncontent"><code>ReactionContent</code></a></td>
<td>
<p>Allows filtering Reactions by emoji.</p>
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
<td><a href="/github-example/inputObjects#reactionorder"><code>ReactionOrder</code></a></td>
<td>
<p>Allows specifying the order in which reactions are returned.</p>
</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td><code>viewerCanReact</code></td>
<td><a href="/github-example/scalars#boolean"><code>Boolean!</code></a></td>
<td>
<p>Can user react to this subject</p>
</td>
</tr>
</tbody>
</table>

## RepositoryAuditEntryData

Metadata for an audit entry with action repo.*

**Fields**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>repository</code></td>
<td><a href="/github-example/objects#repository"><code>Repository</code></a></td>
<td>
<p>The repository associated with the action</p>
</td>
</tr>
<tr>
<td><code>repositoryName</code></td>
<td><a href="/github-example/scalars#string"><code>String</code></a></td>
<td>
<p>The name of the repository</p>
</td>
</tr>
<tr>
<td><code>repositoryResourcePath</code></td>
<td><a href="/github-example/scalars#uri"><code>URI</code></a></td>
<td>
<p>The HTTP path for the repository</p>
</td>
</tr>
<tr>
<td><code>repositoryUrl</code></td>
<td><a href="/github-example/scalars#uri"><code>URI</code></a></td>
<td>
<p>The HTTP URL for the repository</p>
</td>
</tr>
</tbody>
</table>

## RepositoryInfo

A subset of repository info.

**Fields**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>createdAt</code></td>
<td><a href="/github-example/scalars#datetime"><code>DateTime!</code></a></td>
<td>
<p>Identifies the date and time when the object was created.</p>
</td>
</tr>
<tr>
<td><code>description</code></td>
<td><a href="/github-example/scalars#string"><code>String</code></a></td>
<td>
<p>The description of the repository.</p>
</td>
</tr>
<tr>
<td><code>descriptionHTML</code></td>
<td><a href="/github-example/scalars#html"><code>HTML!</code></a></td>
<td>
<p>The description of the repository rendered to HTML.</p>
</td>
</tr>
<tr>
<td><code>forkCount</code></td>
<td><a href="/github-example/scalars#int"><code>Int!</code></a></td>
<td>
<p>Returns how many forks there are of this repository in the whole network.</p>
</td>
</tr>
<tr>
<td><code>hasIssuesEnabled</code></td>
<td><a href="/github-example/scalars#boolean"><code>Boolean!</code></a></td>
<td>
<p>Indicates if the repository has issues feature enabled.</p>
</td>
</tr>
<tr>
<td><code>hasProjectsEnabled</code></td>
<td><a href="/github-example/scalars#boolean"><code>Boolean!</code></a></td>
<td>
<p>Indicates if the repository has the Projects feature enabled.</p>
</td>
</tr>
<tr>
<td><code>hasWikiEnabled</code></td>
<td><a href="/github-example/scalars#boolean"><code>Boolean!</code></a></td>
<td>
<p>Indicates if the repository has wiki feature enabled.</p>
</td>
</tr>
<tr>
<td><code>homepageUrl</code></td>
<td><a href="/github-example/scalars#uri"><code>URI</code></a></td>
<td>
<p>The repository&#39;s URL.</p>
</td>
</tr>
<tr>
<td><code>isArchived</code></td>
<td><a href="/github-example/scalars#boolean"><code>Boolean!</code></a></td>
<td>
<p>Indicates if the repository is unmaintained.</p>
</td>
</tr>
<tr>
<td><code>isFork</code></td>
<td><a href="/github-example/scalars#boolean"><code>Boolean!</code></a></td>
<td>
<p>Identifies if the repository is a fork.</p>
</td>
</tr>
<tr>
<td><code>isInOrganization</code></td>
<td><a href="/github-example/scalars#boolean"><code>Boolean!</code></a></td>
<td>
<p>Indicates if a repository is either owned by an organization, or is a private fork of an organization repository.</p>
</td>
</tr>
<tr>
<td><code>isLocked</code></td>
<td><a href="/github-example/scalars#boolean"><code>Boolean!</code></a></td>
<td>
<p>Indicates if the repository has been locked or not.</p>
</td>
</tr>
<tr>
<td><code>isMirror</code></td>
<td><a href="/github-example/scalars#boolean"><code>Boolean!</code></a></td>
<td>
<p>Identifies if the repository is a mirror.</p>
</td>
</tr>
<tr>
<td><code>isPrivate</code></td>
<td><a href="/github-example/scalars#boolean"><code>Boolean!</code></a></td>
<td>
<p>Identifies if the repository is private or internal.</p>
</td>
</tr>
<tr>
<td><code>isTemplate</code></td>
<td><a href="/github-example/scalars#boolean"><code>Boolean!</code></a></td>
<td>
<p>Identifies if the repository is a template that can be used to generate new repositories.</p>
</td>
</tr>
<tr>
<td><code>licenseInfo</code></td>
<td><a href="/github-example/objects#license"><code>License</code></a></td>
<td>
<p>The license associated with the repository</p>
</td>
</tr>
<tr>
<td><code>lockReason</code></td>
<td><a href="/github-example/enums#repositorylockreason"><code>RepositoryLockReason</code></a></td>
<td>
<p>The reason the repository has been locked.</p>
</td>
</tr>
<tr>
<td><code>mirrorUrl</code></td>
<td><a href="/github-example/scalars#uri"><code>URI</code></a></td>
<td>
<p>The repository&#39;s original mirror URL.</p>
</td>
</tr>
<tr>
<td><code>name</code></td>
<td><a href="/github-example/scalars#string"><code>String!</code></a></td>
<td>
<p>The name of the repository.</p>
</td>
</tr>
<tr>
<td><code>nameWithOwner</code></td>
<td><a href="/github-example/scalars#string"><code>String!</code></a></td>
<td>
<p>The repository&#39;s name with owner.</p>
</td>
</tr>
<tr>
<td><code>openGraphImageUrl</code></td>
<td><a href="/github-example/scalars#uri"><code>URI!</code></a></td>
<td>
<p>The image used to represent this repository in Open Graph data.</p>
</td>
</tr>
<tr>
<td><code>owner</code></td>
<td><a href="/github-example/interfaces#repositoryowner"><code>RepositoryOwner!</code></a></td>
<td>
<p>The User owner of the repository.</p>
</td>
</tr>
<tr>
<td><code>pushedAt</code></td>
<td><a href="/github-example/scalars#datetime"><code>DateTime</code></a></td>
<td>
<p>Identifies when the repository was last pushed to.</p>
</td>
</tr>
<tr>
<td><code>resourcePath</code></td>
<td><a href="/github-example/scalars#uri"><code>URI!</code></a></td>
<td>
<p>The HTTP path for this repository</p>
</td>
</tr>
<tr>
<td><code>shortDescriptionHTML</code></td>
<td><a href="/github-example/scalars#html"><code>HTML!</code></a></td>
<td>
<p>A description of the repository, rendered to HTML without any links in it.</p>

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>limit</code></td>
<td><a href="/github-example/scalars#int"><code>Int</code></a></td>
<td>
<p>How many characters to return.</p>
</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td><code>updatedAt</code></td>
<td><a href="/github-example/scalars#datetime"><code>DateTime!</code></a></td>
<td>
<p>Identifies the date and time when the object was last updated.</p>
</td>
</tr>
<tr>
<td><code>url</code></td>
<td><a href="/github-example/scalars#uri"><code>URI!</code></a></td>
<td>
<p>The HTTP URL for this repository</p>
</td>
</tr>
<tr>
<td><code>usesCustomOpenGraphImage</code></td>
<td><a href="/github-example/scalars#boolean"><code>Boolean!</code></a></td>
<td>
<p>Whether this repository has a custom image to use with Open Graph as opposed to being represented by the owner&#39;s avatar.</p>
</td>
</tr>
</tbody>
</table>

## RepositoryNode

Represents a object that belongs to a repository.

**Fields**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>repository</code></td>
<td><a href="/github-example/objects#repository"><code>Repository!</code></a></td>
<td>
<p>The repository associated with this node.</p>
</td>
</tr>
</tbody>
</table>

## RepositoryOwner

Represents an owner of a Repository.

**Fields**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>avatarUrl</code></td>
<td><a href="/github-example/scalars#uri"><code>URI!</code></a></td>
<td>
<p>A URL pointing to the owner&#39;s public avatar.</p>

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>size</code></td>
<td><a href="/github-example/scalars#int"><code>Int</code></a></td>
<td>
<p>The size of the resulting square image.</p>
</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td><code>id</code></td>
<td><a href="/github-example/scalars#id"><code>ID!</code></a></td>
<td>

</td>
</tr>
<tr>
<td><code>login</code></td>
<td><a href="/github-example/scalars#string"><code>String!</code></a></td>
<td>
<p>The username used to login.</p>
</td>
</tr>
<tr>
<td><code>repositories</code></td>
<td><a href="/github-example/objects#repositoryconnection"><code>RepositoryConnection!</code></a></td>
<td>
<p>A list of repositories that the user owns.</p>

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>affiliations</code></td>
<td><a href="/github-example/enums#repositoryaffiliation"><code>[RepositoryAffiliation]</code></a></td>
<td>
<p>Array of viewer&#39;s affiliation options for repositories returned from the
connection. For example, OWNER will include only repositories that the
current viewer owns.</p>
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
<td><code>isFork</code></td>
<td><a href="/github-example/scalars#boolean"><code>Boolean</code></a></td>
<td>
<p>If non-null, filters repositories according to whether they are forks of another repository</p>
</td>
</tr>
<tr>
<td><code>isLocked</code></td>
<td><a href="/github-example/scalars#boolean"><code>Boolean</code></a></td>
<td>
<p>If non-null, filters repositories according to whether they have been locked</p>
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
<td><a href="/github-example/inputObjects#repositoryorder"><code>RepositoryOrder</code></a></td>
<td>
<p>Ordering options for repositories returned from the connection</p>
</td>
</tr>
<tr>
<td><code>ownerAffiliations</code></td>
<td><a href="/github-example/enums#repositoryaffiliation"><code>[RepositoryAffiliation]</code></a></td>
<td>
<p>Array of owner&#39;s affiliation options for repositories returned from the
connection. For example, OWNER will include only repositories that the
organization or user being viewed owns.</p>
</td>
</tr>
<tr>
<td><code>privacy</code></td>
<td><a href="/github-example/enums#repositoryprivacy"><code>RepositoryPrivacy</code></a></td>
<td>
<p>If non-null, filters repositories according to privacy</p>
</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td><code>repository</code></td>
<td><a href="/github-example/objects#repository"><code>Repository</code></a></td>
<td>
<p>Find Repository.</p>

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>name</code></td>
<td><a href="/github-example/scalars#string"><code>String!</code></a></td>
<td>
<p>Name of Repository to find.</p>
</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td><code>resourcePath</code></td>
<td><a href="/github-example/scalars#uri"><code>URI!</code></a></td>
<td>
<p>The HTTP URL for the owner.</p>
</td>
</tr>
<tr>
<td><code>url</code></td>
<td><a href="/github-example/scalars#uri"><code>URI!</code></a></td>
<td>
<p>The HTTP URL for the owner.</p>
</td>
</tr>
</tbody>
</table>

## RequirableByPullRequest

Represents a type that can be required by a pull request for merging.

**Fields**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>isRequired</code></td>
<td><a href="/github-example/scalars#boolean"><code>Boolean!</code></a></td>
<td>
<p>Whether this is required to pass before merging for a specific pull request.</p>

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>pullRequestId</code></td>
<td><a href="/github-example/scalars#id"><code>ID</code></a></td>
<td>
<p>The id of the pull request this is required for</p>
</td>
</tr>
<tr>
<td><code>pullRequestNumber</code></td>
<td><a href="/github-example/scalars#int"><code>Int</code></a></td>
<td>
<p>The number of the pull request this is required for</p>
</td>
</tr>
</tbody>
</table>

</td>
</tr>
</tbody>
</table>

## Sponsorable

Entities that can be sponsored through GitHub Sponsors

**Fields**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>hasSponsorsListing</code></td>
<td><a href="/github-example/scalars#boolean"><code>Boolean!</code></a></td>
<td>
<p>True if this user/organization has a GitHub Sponsors listing.</p>
</td>
</tr>
<tr>
<td><code>isSponsoredBy</code></td>
<td><a href="/github-example/scalars#boolean"><code>Boolean!</code></a></td>
<td>
<p>Check if the given account is sponsoring this user/organization.</p>

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>accountLogin</code></td>
<td><a href="/github-example/scalars#string"><code>String!</code></a></td>
<td>
<p>The target account&#39;s login.</p>
</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td><code>isSponsoringViewer</code></td>
<td><a href="/github-example/scalars#boolean"><code>Boolean!</code></a></td>
<td>
<p>True if the viewer is sponsored by this user/organization.</p>
</td>
</tr>
<tr>
<td><code>sponsorsListing</code></td>
<td><a href="/github-example/objects#sponsorslisting"><code>SponsorsListing</code></a></td>
<td>
<p>The GitHub Sponsors listing for this user or organization.</p>
</td>
</tr>
<tr>
<td><code>sponsorshipForViewerAsSponsor</code></td>
<td><a href="/github-example/objects#sponsorship"><code>Sponsorship</code></a></td>
<td>
<p>The viewer&#39;s sponsorship of this entity.</p>
</td>
</tr>
<tr>
<td><code>sponsorshipsAsMaintainer</code></td>
<td><a href="/github-example/objects#sponsorshipconnection"><code>SponsorshipConnection!</code></a></td>
<td>
<p>This object&#39;s sponsorships as the maintainer.</p>

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
<td><code>includePrivate</code></td>
<td><a href="/github-example/scalars#boolean"><code>Boolean</code></a></td>
<td>
<p>Whether or not to include private sponsorships in the result set</p>
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
<td><a href="/github-example/inputObjects#sponsorshiporder"><code>SponsorshipOrder</code></a></td>
<td>
<p>Ordering options for sponsorships returned from this connection. If left
blank, the sponsorships will be ordered based on relevancy to the viewer.</p>
</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td><code>sponsorshipsAsSponsor</code></td>
<td><a href="/github-example/objects#sponsorshipconnection"><code>SponsorshipConnection!</code></a></td>
<td>
<p>This object&#39;s sponsorships as the sponsor.</p>

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
<td><code>orderBy</code></td>
<td><a href="/github-example/inputObjects#sponsorshiporder"><code>SponsorshipOrder</code></a></td>
<td>
<p>Ordering options for sponsorships returned from this connection. If left
blank, the sponsorships will be ordered based on relevancy to the viewer.</p>
</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td><code>viewerCanSponsor</code></td>
<td><a href="/github-example/scalars#boolean"><code>Boolean!</code></a></td>
<td>
<p>Whether or not the viewer is able to sponsor this user/organization.</p>
</td>
</tr>
<tr>
<td><code>viewerIsSponsoring</code></td>
<td><a href="/github-example/scalars#boolean"><code>Boolean!</code></a></td>
<td>
<p>True if the viewer is sponsoring this user/organization.</p>
</td>
</tr>
</tbody>
</table>

## Starrable

Things that can be starred.

**Fields**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>id</code></td>
<td><a href="/github-example/scalars#id"><code>ID!</code></a></td>
<td>

</td>
</tr>
<tr>
<td><code>stargazerCount</code></td>
<td><a href="/github-example/scalars#int"><code>Int!</code></a></td>
<td>
<p>Returns a count of how many stargazers there are on this object</p>
</td>
</tr>
<tr>
<td><code>stargazers</code></td>
<td><a href="/github-example/objects#stargazerconnection"><code>StargazerConnection!</code></a></td>
<td>
<p>A list of users who have starred this starrable.</p>

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
<td><code>orderBy</code></td>
<td><a href="/github-example/inputObjects#starorder"><code>StarOrder</code></a></td>
<td>
<p>Order for connection</p>
</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td><code>viewerHasStarred</code></td>
<td><a href="/github-example/scalars#boolean"><code>Boolean!</code></a></td>
<td>
<p>Returns a boolean indicating whether the viewing user has starred this starrable.</p>
</td>
</tr>
</tbody>
</table>

## Subscribable

Entities that can be subscribed to for web and email notifications.

**Fields**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>id</code></td>
<td><a href="/github-example/scalars#id"><code>ID!</code></a></td>
<td>

</td>
</tr>
<tr>
<td><code>viewerCanSubscribe</code></td>
<td><a href="/github-example/scalars#boolean"><code>Boolean!</code></a></td>
<td>
<p>Check if the viewer is able to change their subscription status for the repository.</p>
</td>
</tr>
<tr>
<td><code>viewerSubscription</code></td>
<td><a href="/github-example/enums#subscriptionstate"><code>SubscriptionState</code></a></td>
<td>
<p>Identifies if the viewer is watching, not watching, or ignoring the subscribable entity.</p>
</td>
</tr>
</tbody>
</table>

## TeamAuditEntryData

Metadata for an audit entry with action team.*

**Fields**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>team</code></td>
<td><a href="/github-example/objects#team"><code>Team</code></a></td>
<td>
<p>The team associated with the action</p>
</td>
</tr>
<tr>
<td><code>teamName</code></td>
<td><a href="/github-example/scalars#string"><code>String</code></a></td>
<td>
<p>The name of the team</p>
</td>
</tr>
<tr>
<td><code>teamResourcePath</code></td>
<td><a href="/github-example/scalars#uri"><code>URI</code></a></td>
<td>
<p>The HTTP path for this team</p>
</td>
</tr>
<tr>
<td><code>teamUrl</code></td>
<td><a href="/github-example/scalars#uri"><code>URI</code></a></td>
<td>
<p>The HTTP URL for this team</p>
</td>
</tr>
</tbody>
</table>

## TopicAuditEntryData

Metadata for an audit entry with a topic.

**Fields**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>topic</code></td>
<td><a href="/github-example/objects#topic"><code>Topic</code></a></td>
<td>
<p>The name of the topic added to the repository</p>
</td>
</tr>
<tr>
<td><code>topicName</code></td>
<td><a href="/github-example/scalars#string"><code>String</code></a></td>
<td>
<p>The name of the topic added to the repository</p>
</td>
</tr>
</tbody>
</table>

## UniformResourceLocatable

Represents a type that can be retrieved by a URL.

**Fields**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>resourcePath</code></td>
<td><a href="/github-example/scalars#uri"><code>URI!</code></a></td>
<td>
<p>The HTML path to this resource.</p>
</td>
</tr>
<tr>
<td><code>url</code></td>
<td><a href="/github-example/scalars#uri"><code>URI!</code></a></td>
<td>
<p>The URL to this resource.</p>
</td>
</tr>
</tbody>
</table>

## Updatable

Entities that can be updated.

**Fields**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>viewerCanUpdate</code></td>
<td><a href="/github-example/scalars#boolean"><code>Boolean!</code></a></td>
<td>
<p>Check if the current viewer can update this object.</p>
</td>
</tr>
</tbody>
</table>

## UpdatableComment

Comments that can be updated.

**Fields**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>viewerCannotUpdateReasons</code></td>
<td><a href="/github-example/enums#commentcannotupdatereason"><code>[CommentCannotUpdateReason!]!</code></a></td>
<td>
<p>Reasons why the current viewer can not update this comment.</p>
</td>
</tr>
</tbody>
</table>

