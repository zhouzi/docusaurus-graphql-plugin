---
id: interfaces
title: Interfaces
slug: interfaces
---

## Actor

Represents an object which can take actions on GitHub. Typically a User or Bot.

<p style={{ marginBottom: "0.4em" }}><strong>Implemented by</strong></p>

- [Bot](/docusaurus-graphql-plugin/github-example/objects#bot)
- [EnterpriseUserAccount](/docusaurus-graphql-plugin/github-example/objects#enterpriseuseraccount)
- [Mannequin](/docusaurus-graphql-plugin/github-example/objects#mannequin)
- [Organization](/docusaurus-graphql-plugin/github-example/objects#organization)
- [User](/docusaurus-graphql-plugin/github-example/objects#user)

<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
avatarUrl<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#uri"><code>URI!</code></a>
</td>
<td>
<p>A URL pointing to the actor&#39;s public avatar.</p>

<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
size<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#int"><code>Int</code></a>
</td>
<td>
<p>The size of the resulting square image.</p>
</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td>
login<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#string"><code>String!</code></a>
</td>
<td>
<p>The username of the actor.</p>
</td>
</tr>
<tr>
<td>
resourcePath<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#uri"><code>URI!</code></a>
</td>
<td>
<p>The HTTP path for this actor.</p>
</td>
</tr>
<tr>
<td>
url<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#uri"><code>URI!</code></a>
</td>
<td>
<p>The HTTP URL for this actor.</p>
</td>
</tr>
</tbody>
</table>

## Assignable

An object that can have users assigned to it.

<p style={{ marginBottom: "0.4em" }}><strong>Implemented by</strong></p>

- [Issue](/docusaurus-graphql-plugin/github-example/objects#issue)
- [PullRequest](/docusaurus-graphql-plugin/github-example/objects#pullrequest)

<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
assignees<br />
<a href="/docusaurus-graphql-plugin/github-example/objects#userconnection"><code>UserConnection!</code></a>
</td>
<td>
<p>A list of Users assigned to this object.</p>

<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
after<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#string"><code>String</code></a>
</td>
<td>
<p>Returns the elements in the list that come after the specified cursor.</p>
</td>
</tr>
<tr>
<td>
before<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#string"><code>String</code></a>
</td>
<td>
<p>Returns the elements in the list that come before the specified cursor.</p>
</td>
</tr>
<tr>
<td>
first<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#int"><code>Int</code></a>
</td>
<td>
<p>Returns the first <em>n</em> elements from the list.</p>
</td>
</tr>
<tr>
<td>
last<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#int"><code>Int</code></a>
</td>
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

<p style={{ marginBottom: "0.4em" }}><strong>Implemented by</strong></p>

- [MembersCanDeleteReposClearAuditEntry](/docusaurus-graphql-plugin/github-example/objects#memberscandeletereposclearauditentry)
- [MembersCanDeleteReposDisableAuditEntry](/docusaurus-graphql-plugin/github-example/objects#memberscandeletereposdisableauditentry)
- [MembersCanDeleteReposEnableAuditEntry](/docusaurus-graphql-plugin/github-example/objects#memberscandeletereposenableauditentry)
- [OauthApplicationCreateAuditEntry](/docusaurus-graphql-plugin/github-example/objects#oauthapplicationcreateauditentry)
- [OrgAddBillingManagerAuditEntry](/docusaurus-graphql-plugin/github-example/objects#orgaddbillingmanagerauditentry)
- [OrgAddMemberAuditEntry](/docusaurus-graphql-plugin/github-example/objects#orgaddmemberauditentry)
- [OrgBlockUserAuditEntry](/docusaurus-graphql-plugin/github-example/objects#orgblockuserauditentry)
- [OrgConfigDisableCollaboratorsOnlyAuditEntry](/docusaurus-graphql-plugin/github-example/objects#orgconfigdisablecollaboratorsonlyauditentry)
- [OrgConfigEnableCollaboratorsOnlyAuditEntry](/docusaurus-graphql-plugin/github-example/objects#orgconfigenablecollaboratorsonlyauditentry)
- [OrgCreateAuditEntry](/docusaurus-graphql-plugin/github-example/objects#orgcreateauditentry)
- [OrgDisableOauthAppRestrictionsAuditEntry](/docusaurus-graphql-plugin/github-example/objects#orgdisableoauthapprestrictionsauditentry)
- [OrgDisableSamlAuditEntry](/docusaurus-graphql-plugin/github-example/objects#orgdisablesamlauditentry)
- [OrgDisableTwoFactorRequirementAuditEntry](/docusaurus-graphql-plugin/github-example/objects#orgdisabletwofactorrequirementauditentry)
- [OrgEnableOauthAppRestrictionsAuditEntry](/docusaurus-graphql-plugin/github-example/objects#orgenableoauthapprestrictionsauditentry)
- [OrgEnableSamlAuditEntry](/docusaurus-graphql-plugin/github-example/objects#orgenablesamlauditentry)
- [OrgEnableTwoFactorRequirementAuditEntry](/docusaurus-graphql-plugin/github-example/objects#orgenabletwofactorrequirementauditentry)
- [OrgInviteMemberAuditEntry](/docusaurus-graphql-plugin/github-example/objects#orginvitememberauditentry)
- [OrgInviteToBusinessAuditEntry](/docusaurus-graphql-plugin/github-example/objects#orginvitetobusinessauditentry)
- [OrgOauthAppAccessApprovedAuditEntry](/docusaurus-graphql-plugin/github-example/objects#orgoauthappaccessapprovedauditentry)
- [OrgOauthAppAccessDeniedAuditEntry](/docusaurus-graphql-plugin/github-example/objects#orgoauthappaccessdeniedauditentry)
- [OrgOauthAppAccessRequestedAuditEntry](/docusaurus-graphql-plugin/github-example/objects#orgoauthappaccessrequestedauditentry)
- [OrgRemoveBillingManagerAuditEntry](/docusaurus-graphql-plugin/github-example/objects#orgremovebillingmanagerauditentry)
- [OrgRemoveMemberAuditEntry](/docusaurus-graphql-plugin/github-example/objects#orgremovememberauditentry)
- [OrgRemoveOutsideCollaboratorAuditEntry](/docusaurus-graphql-plugin/github-example/objects#orgremoveoutsidecollaboratorauditentry)
- [OrgRestoreMemberAuditEntry](/docusaurus-graphql-plugin/github-example/objects#orgrestorememberauditentry)
- [OrgUnblockUserAuditEntry](/docusaurus-graphql-plugin/github-example/objects#orgunblockuserauditentry)
- [OrgUpdateDefaultRepositoryPermissionAuditEntry](/docusaurus-graphql-plugin/github-example/objects#orgupdatedefaultrepositorypermissionauditentry)
- [OrgUpdateMemberAuditEntry](/docusaurus-graphql-plugin/github-example/objects#orgupdatememberauditentry)
- [OrgUpdateMemberRepositoryCreationPermissionAuditEntry](/docusaurus-graphql-plugin/github-example/objects#orgupdatememberrepositorycreationpermissionauditentry)
- [OrgUpdateMemberRepositoryInvitationPermissionAuditEntry](/docusaurus-graphql-plugin/github-example/objects#orgupdatememberrepositoryinvitationpermissionauditentry)
- [PrivateRepositoryForkingDisableAuditEntry](/docusaurus-graphql-plugin/github-example/objects#privaterepositoryforkingdisableauditentry)
- [PrivateRepositoryForkingEnableAuditEntry](/docusaurus-graphql-plugin/github-example/objects#privaterepositoryforkingenableauditentry)
- [RepoAccessAuditEntry](/docusaurus-graphql-plugin/github-example/objects#repoaccessauditentry)
- [RepoAddMemberAuditEntry](/docusaurus-graphql-plugin/github-example/objects#repoaddmemberauditentry)
- [RepoAddTopicAuditEntry](/docusaurus-graphql-plugin/github-example/objects#repoaddtopicauditentry)
- [RepoArchivedAuditEntry](/docusaurus-graphql-plugin/github-example/objects#repoarchivedauditentry)
- [RepoChangeMergeSettingAuditEntry](/docusaurus-graphql-plugin/github-example/objects#repochangemergesettingauditentry)
- [RepoConfigDisableAnonymousGitAccessAuditEntry](/docusaurus-graphql-plugin/github-example/objects#repoconfigdisableanonymousgitaccessauditentry)
- [RepoConfigDisableCollaboratorsOnlyAuditEntry](/docusaurus-graphql-plugin/github-example/objects#repoconfigdisablecollaboratorsonlyauditentry)
- [RepoConfigDisableContributorsOnlyAuditEntry](/docusaurus-graphql-plugin/github-example/objects#repoconfigdisablecontributorsonlyauditentry)
- [RepoConfigDisableSockpuppetDisallowedAuditEntry](/docusaurus-graphql-plugin/github-example/objects#repoconfigdisablesockpuppetdisallowedauditentry)
- [RepoConfigEnableAnonymousGitAccessAuditEntry](/docusaurus-graphql-plugin/github-example/objects#repoconfigenableanonymousgitaccessauditentry)
- [RepoConfigEnableCollaboratorsOnlyAuditEntry](/docusaurus-graphql-plugin/github-example/objects#repoconfigenablecollaboratorsonlyauditentry)
- [RepoConfigEnableContributorsOnlyAuditEntry](/docusaurus-graphql-plugin/github-example/objects#repoconfigenablecontributorsonlyauditentry)
- [RepoConfigEnableSockpuppetDisallowedAuditEntry](/docusaurus-graphql-plugin/github-example/objects#repoconfigenablesockpuppetdisallowedauditentry)
- [RepoConfigLockAnonymousGitAccessAuditEntry](/docusaurus-graphql-plugin/github-example/objects#repoconfiglockanonymousgitaccessauditentry)
- [RepoConfigUnlockAnonymousGitAccessAuditEntry](/docusaurus-graphql-plugin/github-example/objects#repoconfigunlockanonymousgitaccessauditentry)
- [RepoCreateAuditEntry](/docusaurus-graphql-plugin/github-example/objects#repocreateauditentry)
- [RepoDestroyAuditEntry](/docusaurus-graphql-plugin/github-example/objects#repodestroyauditentry)
- [RepoRemoveMemberAuditEntry](/docusaurus-graphql-plugin/github-example/objects#reporemovememberauditentry)
- [RepoRemoveTopicAuditEntry](/docusaurus-graphql-plugin/github-example/objects#reporemovetopicauditentry)
- [RepositoryVisibilityChangeDisableAuditEntry](/docusaurus-graphql-plugin/github-example/objects#repositoryvisibilitychangedisableauditentry)
- [RepositoryVisibilityChangeEnableAuditEntry](/docusaurus-graphql-plugin/github-example/objects#repositoryvisibilitychangeenableauditentry)
- [TeamAddMemberAuditEntry](/docusaurus-graphql-plugin/github-example/objects#teamaddmemberauditentry)
- [TeamAddRepositoryAuditEntry](/docusaurus-graphql-plugin/github-example/objects#teamaddrepositoryauditentry)
- [TeamChangeParentTeamAuditEntry](/docusaurus-graphql-plugin/github-example/objects#teamchangeparentteamauditentry)
- [TeamRemoveMemberAuditEntry](/docusaurus-graphql-plugin/github-example/objects#teamremovememberauditentry)
- [TeamRemoveRepositoryAuditEntry](/docusaurus-graphql-plugin/github-example/objects#teamremoverepositoryauditentry)

<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
action<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#string"><code>String!</code></a>
</td>
<td>
<p>The action name</p>
</td>
</tr>
<tr>
<td>
actor<br />
<a href="/docusaurus-graphql-plugin/github-example/unions#auditentryactor"><code>AuditEntryActor</code></a>
</td>
<td>
<p>The user who initiated the action</p>
</td>
</tr>
<tr>
<td>
actorIp<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#string"><code>String</code></a>
</td>
<td>
<p>The IP address of the actor</p>
</td>
</tr>
<tr>
<td>
actorLocation<br />
<a href="/docusaurus-graphql-plugin/github-example/objects#actorlocation"><code>ActorLocation</code></a>
</td>
<td>
<p>A readable representation of the actor&#39;s location</p>
</td>
</tr>
<tr>
<td>
actorLogin<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#string"><code>String</code></a>
</td>
<td>
<p>The username of the user who initiated the action</p>
</td>
</tr>
<tr>
<td>
actorResourcePath<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#uri"><code>URI</code></a>
</td>
<td>
<p>The HTTP path for the actor.</p>
</td>
</tr>
<tr>
<td>
actorUrl<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#uri"><code>URI</code></a>
</td>
<td>
<p>The HTTP URL for the actor.</p>
</td>
</tr>
<tr>
<td>
createdAt<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#precisedatetime"><code>PreciseDateTime!</code></a>
</td>
<td>
<p>The time the action was initiated</p>
</td>
</tr>
<tr>
<td>
operationType<br />
<a href="/docusaurus-graphql-plugin/github-example/enums#operationtype"><code>OperationType</code></a>
</td>
<td>
<p>The corresponding operation type for the action</p>
</td>
</tr>
<tr>
<td>
user<br />
<a href="/docusaurus-graphql-plugin/github-example/objects#user"><code>User</code></a>
</td>
<td>
<p>The user affected by the action</p>
</td>
</tr>
<tr>
<td>
userLogin<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#string"><code>String</code></a>
</td>
<td>
<p>For actions involving two users, the actor is the initiator and the user is the affected user.</p>
</td>
</tr>
<tr>
<td>
userResourcePath<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#uri"><code>URI</code></a>
</td>
<td>
<p>The HTTP path for the user.</p>
</td>
</tr>
<tr>
<td>
userUrl<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#uri"><code>URI</code></a>
</td>
<td>
<p>The HTTP URL for the user.</p>
</td>
</tr>
</tbody>
</table>

## Closable

An object that can be closed

<p style={{ marginBottom: "0.4em" }}><strong>Implemented by</strong></p>

- [Issue](/docusaurus-graphql-plugin/github-example/objects#issue)
- [Milestone](/docusaurus-graphql-plugin/github-example/objects#milestone)
- [Project](/docusaurus-graphql-plugin/github-example/objects#project)
- [PullRequest](/docusaurus-graphql-plugin/github-example/objects#pullrequest)

<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
closed<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>
<p><code>true</code> if the object is closed (definition of closed may depend on type)</p>
</td>
</tr>
<tr>
<td>
closedAt<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#datetime"><code>DateTime</code></a>
</td>
<td>
<p>Identifies the date and time when the object was closed.</p>
</td>
</tr>
</tbody>
</table>

## Comment

Represents a comment.

<p style={{ marginBottom: "0.4em" }}><strong>Implemented by</strong></p>

- [CommitComment](/docusaurus-graphql-plugin/github-example/objects#commitcomment)
- [GistComment](/docusaurus-graphql-plugin/github-example/objects#gistcomment)
- [Issue](/docusaurus-graphql-plugin/github-example/objects#issue)
- [IssueComment](/docusaurus-graphql-plugin/github-example/objects#issuecomment)
- [PullRequest](/docusaurus-graphql-plugin/github-example/objects#pullrequest)
- [PullRequestReview](/docusaurus-graphql-plugin/github-example/objects#pullrequestreview)
- [PullRequestReviewComment](/docusaurus-graphql-plugin/github-example/objects#pullrequestreviewcomment)
- [TeamDiscussion](/docusaurus-graphql-plugin/github-example/objects#teamdiscussion)
- [TeamDiscussionComment](/docusaurus-graphql-plugin/github-example/objects#teamdiscussioncomment)

<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
author<br />
<a href="/docusaurus-graphql-plugin/github-example/interfaces#actor"><code>Actor</code></a>
</td>
<td>
<p>The actor who authored the comment.</p>
</td>
</tr>
<tr>
<td>
authorAssociation<br />
<a href="/docusaurus-graphql-plugin/github-example/enums#commentauthorassociation"><code>CommentAuthorAssociation!</code></a>
</td>
<td>
<p>Author&#39;s association with the subject of the comment.</p>
</td>
</tr>
<tr>
<td>
body<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#string"><code>String!</code></a>
</td>
<td>
<p>The body as Markdown.</p>
</td>
</tr>
<tr>
<td>
bodyHTML<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#html"><code>HTML!</code></a>
</td>
<td>
<p>The body rendered to HTML.</p>
</td>
</tr>
<tr>
<td>
bodyText<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#string"><code>String!</code></a>
</td>
<td>
<p>The body rendered to text.</p>
</td>
</tr>
<tr>
<td>
createdAt<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#datetime"><code>DateTime!</code></a>
</td>
<td>
<p>Identifies the date and time when the object was created.</p>
</td>
</tr>
<tr>
<td>
createdViaEmail<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>
<p>Check if this comment was created via an email reply.</p>
</td>
</tr>
<tr>
<td>
editor<br />
<a href="/docusaurus-graphql-plugin/github-example/interfaces#actor"><code>Actor</code></a>
</td>
<td>
<p>The actor who edited the comment.</p>
</td>
</tr>
<tr>
<td>
id<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#id"><code>ID!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
includesCreatedEdit<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>
<p>Check if this comment was edited and includes an edit with the creation data</p>
</td>
</tr>
<tr>
<td>
lastEditedAt<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#datetime"><code>DateTime</code></a>
</td>
<td>
<p>The moment the editor made the last edit</p>
</td>
</tr>
<tr>
<td>
publishedAt<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#datetime"><code>DateTime</code></a>
</td>
<td>
<p>Identifies when the comment was published at.</p>
</td>
</tr>
<tr>
<td>
updatedAt<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#datetime"><code>DateTime!</code></a>
</td>
<td>
<p>Identifies the date and time when the object was last updated.</p>
</td>
</tr>
<tr>
<td>
userContentEdits<br />
<a href="/docusaurus-graphql-plugin/github-example/objects#usercontenteditconnection"><code>UserContentEditConnection</code></a>
</td>
<td>
<p>A list of edits to this content.</p>

<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
after<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#string"><code>String</code></a>
</td>
<td>
<p>Returns the elements in the list that come after the specified cursor.</p>
</td>
</tr>
<tr>
<td>
before<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#string"><code>String</code></a>
</td>
<td>
<p>Returns the elements in the list that come before the specified cursor.</p>
</td>
</tr>
<tr>
<td>
first<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#int"><code>Int</code></a>
</td>
<td>
<p>Returns the first <em>n</em> elements from the list.</p>
</td>
</tr>
<tr>
<td>
last<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#int"><code>Int</code></a>
</td>
<td>
<p>Returns the last <em>n</em> elements from the list.</p>
</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td>
viewerDidAuthor<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>
<p>Did the viewer author this comment.</p>
</td>
</tr>
</tbody>
</table>

## Contribution

Represents a contribution a user made on GitHub, such as opening an issue.

<p style={{ marginBottom: "0.4em" }}><strong>Implemented by</strong></p>

- [CreatedCommitContribution](/docusaurus-graphql-plugin/github-example/objects#createdcommitcontribution)
- [CreatedIssueContribution](/docusaurus-graphql-plugin/github-example/objects#createdissuecontribution)
- [CreatedPullRequestContribution](/docusaurus-graphql-plugin/github-example/objects#createdpullrequestcontribution)
- [CreatedPullRequestReviewContribution](/docusaurus-graphql-plugin/github-example/objects#createdpullrequestreviewcontribution)
- [CreatedRepositoryContribution](/docusaurus-graphql-plugin/github-example/objects#createdrepositorycontribution)
- [JoinedGitHubContribution](/docusaurus-graphql-plugin/github-example/objects#joinedgithubcontribution)
- [RestrictedContribution](/docusaurus-graphql-plugin/github-example/objects#restrictedcontribution)

<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
isRestricted<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>
<p>Whether this contribution is associated with a record you do not have access to. For
example, your own &#39;first issue&#39; contribution may have been made on a repository you can no
longer access.</p>
</td>
</tr>
<tr>
<td>
occurredAt<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#datetime"><code>DateTime!</code></a>
</td>
<td>
<p>When this contribution was made.</p>
</td>
</tr>
<tr>
<td>
resourcePath<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#uri"><code>URI!</code></a>
</td>
<td>
<p>The HTTP path for this contribution.</p>
</td>
</tr>
<tr>
<td>
url<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#uri"><code>URI!</code></a>
</td>
<td>
<p>The HTTP URL for this contribution.</p>
</td>
</tr>
<tr>
<td>
user<br />
<a href="/docusaurus-graphql-plugin/github-example/objects#user"><code>User!</code></a>
</td>
<td>
<p>The user who made this contribution.</p>
</td>
</tr>
</tbody>
</table>

## Deletable

Entities that can be deleted.

<p style={{ marginBottom: "0.4em" }}><strong>Implemented by</strong></p>

- [CommitComment](/docusaurus-graphql-plugin/github-example/objects#commitcomment)
- [GistComment](/docusaurus-graphql-plugin/github-example/objects#gistcomment)
- [IssueComment](/docusaurus-graphql-plugin/github-example/objects#issuecomment)
- [PullRequestReview](/docusaurus-graphql-plugin/github-example/objects#pullrequestreview)
- [PullRequestReviewComment](/docusaurus-graphql-plugin/github-example/objects#pullrequestreviewcomment)
- [TeamDiscussion](/docusaurus-graphql-plugin/github-example/objects#teamdiscussion)
- [TeamDiscussionComment](/docusaurus-graphql-plugin/github-example/objects#teamdiscussioncomment)

<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
viewerCanDelete<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>
<p>Check if the current viewer can delete this object.</p>
</td>
</tr>
</tbody>
</table>

## EnterpriseAuditEntryData

Metadata for an audit entry containing enterprise account information.

<p style={{ marginBottom: "0.4em" }}><strong>Implemented by</strong></p>

- [MembersCanDeleteReposClearAuditEntry](/docusaurus-graphql-plugin/github-example/objects#memberscandeletereposclearauditentry)
- [MembersCanDeleteReposDisableAuditEntry](/docusaurus-graphql-plugin/github-example/objects#memberscandeletereposdisableauditentry)
- [MembersCanDeleteReposEnableAuditEntry](/docusaurus-graphql-plugin/github-example/objects#memberscandeletereposenableauditentry)
- [OrgInviteToBusinessAuditEntry](/docusaurus-graphql-plugin/github-example/objects#orginvitetobusinessauditentry)
- [PrivateRepositoryForkingDisableAuditEntry](/docusaurus-graphql-plugin/github-example/objects#privaterepositoryforkingdisableauditentry)
- [PrivateRepositoryForkingEnableAuditEntry](/docusaurus-graphql-plugin/github-example/objects#privaterepositoryforkingenableauditentry)
- [RepositoryVisibilityChangeDisableAuditEntry](/docusaurus-graphql-plugin/github-example/objects#repositoryvisibilitychangedisableauditentry)
- [RepositoryVisibilityChangeEnableAuditEntry](/docusaurus-graphql-plugin/github-example/objects#repositoryvisibilitychangeenableauditentry)

<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
enterpriseResourcePath<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#uri"><code>URI</code></a>
</td>
<td>
<p>The HTTP path for this enterprise.</p>
</td>
</tr>
<tr>
<td>
enterpriseSlug<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#string"><code>String</code></a>
</td>
<td>
<p>The slug of the enterprise.</p>
</td>
</tr>
<tr>
<td>
enterpriseUrl<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#uri"><code>URI</code></a>
</td>
<td>
<p>The HTTP URL for this enterprise.</p>
</td>
</tr>
</tbody>
</table>

## GitObject

Represents a Git object.

<p style={{ marginBottom: "0.4em" }}><strong>Implemented by</strong></p>

- [Blob](/docusaurus-graphql-plugin/github-example/objects#blob)
- [Commit](/docusaurus-graphql-plugin/github-example/objects#commit)
- [Tag](/docusaurus-graphql-plugin/github-example/objects#tag)
- [Tree](/docusaurus-graphql-plugin/github-example/objects#tree)

<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
abbreviatedOid<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#string"><code>String!</code></a>
</td>
<td>
<p>An abbreviated version of the Git object ID</p>
</td>
</tr>
<tr>
<td>
commitResourcePath<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#uri"><code>URI!</code></a>
</td>
<td>
<p>The HTTP path for this Git object</p>
</td>
</tr>
<tr>
<td>
commitUrl<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#uri"><code>URI!</code></a>
</td>
<td>
<p>The HTTP URL for this Git object</p>
</td>
</tr>
<tr>
<td>
id<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#id"><code>ID!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
oid<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#gitobjectid"><code>GitObjectID!</code></a>
</td>
<td>
<p>The Git object ID</p>
</td>
</tr>
<tr>
<td>
repository<br />
<a href="/docusaurus-graphql-plugin/github-example/objects#repository"><code>Repository!</code></a>
</td>
<td>
<p>The Repository the Git object belongs to</p>
</td>
</tr>
</tbody>
</table>

## GitSignature

Information about a signature (GPG or S/MIME) on a Commit or Tag.

<p style={{ marginBottom: "0.4em" }}><strong>Implemented by</strong></p>

- [GpgSignature](/docusaurus-graphql-plugin/github-example/objects#gpgsignature)
- [SmimeSignature](/docusaurus-graphql-plugin/github-example/objects#smimesignature)
- [UnknownSignature](/docusaurus-graphql-plugin/github-example/objects#unknownsignature)

<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
email<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#string"><code>String!</code></a>
</td>
<td>
<p>Email used to sign this object.</p>
</td>
</tr>
<tr>
<td>
isValid<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>
<p>True if the signature is valid and verified by GitHub.</p>
</td>
</tr>
<tr>
<td>
payload<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#string"><code>String!</code></a>
</td>
<td>
<p>Payload for GPG signing object. Raw ODB object without the signature header.</p>
</td>
</tr>
<tr>
<td>
signature<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#string"><code>String!</code></a>
</td>
<td>
<p>ASCII-armored signature header from object.</p>
</td>
</tr>
<tr>
<td>
signer<br />
<a href="/docusaurus-graphql-plugin/github-example/objects#user"><code>User</code></a>
</td>
<td>
<p>GitHub user corresponding to the email signing this commit.</p>
</td>
</tr>
<tr>
<td>
state<br />
<a href="/docusaurus-graphql-plugin/github-example/enums#gitsignaturestate"><code>GitSignatureState!</code></a>
</td>
<td>
<p>The state of this signature. <code>VALID</code> if signature is valid and verified by
GitHub, otherwise represents reason why signature is considered invalid.</p>
</td>
</tr>
<tr>
<td>
wasSignedByGitHub<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>
<p>True if the signature was made with GitHub&#39;s signing key.</p>
</td>
</tr>
</tbody>
</table>

## HovercardContext

An individual line of a hovercard

<p style={{ marginBottom: "0.4em" }}><strong>Implemented by</strong></p>

- [GenericHovercardContext](/docusaurus-graphql-plugin/github-example/objects#generichovercardcontext)
- [OrganizationTeamsHovercardContext](/docusaurus-graphql-plugin/github-example/objects#organizationteamshovercardcontext)
- [OrganizationsHovercardContext](/docusaurus-graphql-plugin/github-example/objects#organizationshovercardcontext)
- [ReviewStatusHovercardContext](/docusaurus-graphql-plugin/github-example/objects#reviewstatushovercardcontext)
- [ViewerHovercardContext](/docusaurus-graphql-plugin/github-example/objects#viewerhovercardcontext)

<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
message<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#string"><code>String!</code></a>
</td>
<td>
<p>A string describing this context</p>
</td>
</tr>
<tr>
<td>
octicon<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#string"><code>String!</code></a>
</td>
<td>
<p>An octicon to accompany this context</p>
</td>
</tr>
</tbody>
</table>

## Labelable

An object that can have labels assigned to it.

<p style={{ marginBottom: "0.4em" }}><strong>Implemented by</strong></p>

- [Issue](/docusaurus-graphql-plugin/github-example/objects#issue)
- [PullRequest](/docusaurus-graphql-plugin/github-example/objects#pullrequest)

<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
labels<br />
<a href="/docusaurus-graphql-plugin/github-example/objects#labelconnection"><code>LabelConnection</code></a>
</td>
<td>
<p>A list of labels associated with the object.</p>

<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
after<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#string"><code>String</code></a>
</td>
<td>
<p>Returns the elements in the list that come after the specified cursor.</p>
</td>
</tr>
<tr>
<td>
before<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#string"><code>String</code></a>
</td>
<td>
<p>Returns the elements in the list that come before the specified cursor.</p>
</td>
</tr>
<tr>
<td>
first<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#int"><code>Int</code></a>
</td>
<td>
<p>Returns the first <em>n</em> elements from the list.</p>
</td>
</tr>
<tr>
<td>
last<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#int"><code>Int</code></a>
</td>
<td>
<p>Returns the last <em>n</em> elements from the list.</p>
</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docusaurus-graphql-plugin/github-example/inputObjects#labelorder"><code>LabelOrder</code></a>
</td>
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

<p style={{ marginBottom: "0.4em" }}><strong>Implemented by</strong></p>

- [Issue](/docusaurus-graphql-plugin/github-example/objects#issue)
- [PullRequest](/docusaurus-graphql-plugin/github-example/objects#pullrequest)

<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
activeLockReason<br />
<a href="/docusaurus-graphql-plugin/github-example/enums#lockreason"><code>LockReason</code></a>
</td>
<td>
<p>Reason that the conversation was locked.</p>
</td>
</tr>
<tr>
<td>
locked<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>
<p><code>true</code> if the object is locked</p>
</td>
</tr>
</tbody>
</table>

## MemberStatusable

Entities that have members who can set status messages.

<p style={{ marginBottom: "0.4em" }}><strong>Implemented by</strong></p>

- [Organization](/docusaurus-graphql-plugin/github-example/objects#organization)
- [Team](/docusaurus-graphql-plugin/github-example/objects#team)

<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
memberStatuses<br />
<a href="/docusaurus-graphql-plugin/github-example/objects#userstatusconnection"><code>UserStatusConnection!</code></a>
</td>
<td>
<p>Get the status messages members of this entity have set that are either public or visible only to the organization.</p>

<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
after<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#string"><code>String</code></a>
</td>
<td>
<p>Returns the elements in the list that come after the specified cursor.</p>
</td>
</tr>
<tr>
<td>
before<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#string"><code>String</code></a>
</td>
<td>
<p>Returns the elements in the list that come before the specified cursor.</p>
</td>
</tr>
<tr>
<td>
first<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#int"><code>Int</code></a>
</td>
<td>
<p>Returns the first <em>n</em> elements from the list.</p>
</td>
</tr>
<tr>
<td>
last<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#int"><code>Int</code></a>
</td>
<td>
<p>Returns the last <em>n</em> elements from the list.</p>
</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docusaurus-graphql-plugin/github-example/inputObjects#userstatusorder"><code>UserStatusOrder</code></a>
</td>
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

<p style={{ marginBottom: "0.4em" }}><strong>Implemented by</strong></p>

- [CommitComment](/docusaurus-graphql-plugin/github-example/objects#commitcomment)
- [GistComment](/docusaurus-graphql-plugin/github-example/objects#gistcomment)
- [IssueComment](/docusaurus-graphql-plugin/github-example/objects#issuecomment)
- [PullRequestReviewComment](/docusaurus-graphql-plugin/github-example/objects#pullrequestreviewcomment)

<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
isMinimized<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>
<p>Returns whether or not a comment has been minimized.</p>
</td>
</tr>
<tr>
<td>
minimizedReason<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#string"><code>String</code></a>
</td>
<td>
<p>Returns why the comment was minimized.</p>
</td>
</tr>
<tr>
<td>
viewerCanMinimize<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>
<p>Check if the current viewer can minimize this object.</p>
</td>
</tr>
</tbody>
</table>

## Node

An object with an ID.

<p style={{ marginBottom: "0.4em" }}><strong>Implemented by</strong></p>

- [AddedToProjectEvent](/docusaurus-graphql-plugin/github-example/objects#addedtoprojectevent)
- [App](/docusaurus-graphql-plugin/github-example/objects#app)
- [AssignedEvent](/docusaurus-graphql-plugin/github-example/objects#assignedevent)
- [AutoMergeDisabledEvent](/docusaurus-graphql-plugin/github-example/objects#automergedisabledevent)
- [AutoMergeEnabledEvent](/docusaurus-graphql-plugin/github-example/objects#automergeenabledevent)
- [AutoRebaseEnabledEvent](/docusaurus-graphql-plugin/github-example/objects#autorebaseenabledevent)
- [AutoSquashEnabledEvent](/docusaurus-graphql-plugin/github-example/objects#autosquashenabledevent)
- [AutomaticBaseChangeFailedEvent](/docusaurus-graphql-plugin/github-example/objects#automaticbasechangefailedevent)
- [AutomaticBaseChangeSucceededEvent](/docusaurus-graphql-plugin/github-example/objects#automaticbasechangesucceededevent)
- [BaseRefChangedEvent](/docusaurus-graphql-plugin/github-example/objects#baserefchangedevent)
- [BaseRefDeletedEvent](/docusaurus-graphql-plugin/github-example/objects#baserefdeletedevent)
- [BaseRefForcePushedEvent](/docusaurus-graphql-plugin/github-example/objects#baserefforcepushedevent)
- [Blob](/docusaurus-graphql-plugin/github-example/objects#blob)
- [Bot](/docusaurus-graphql-plugin/github-example/objects#bot)
- [BranchProtectionRule](/docusaurus-graphql-plugin/github-example/objects#branchprotectionrule)
- [CWE](/docusaurus-graphql-plugin/github-example/objects#cwe)
- [CheckRun](/docusaurus-graphql-plugin/github-example/objects#checkrun)
- [CheckSuite](/docusaurus-graphql-plugin/github-example/objects#checksuite)
- [ClosedEvent](/docusaurus-graphql-plugin/github-example/objects#closedevent)
- [CodeOfConduct](/docusaurus-graphql-plugin/github-example/objects#codeofconduct)
- [CommentDeletedEvent](/docusaurus-graphql-plugin/github-example/objects#commentdeletedevent)
- [Commit](/docusaurus-graphql-plugin/github-example/objects#commit)
- [CommitComment](/docusaurus-graphql-plugin/github-example/objects#commitcomment)
- [CommitCommentThread](/docusaurus-graphql-plugin/github-example/objects#commitcommentthread)
- [ConnectedEvent](/docusaurus-graphql-plugin/github-example/objects#connectedevent)
- [ConvertToDraftEvent](/docusaurus-graphql-plugin/github-example/objects#converttodraftevent)
- [ConvertedNoteToIssueEvent](/docusaurus-graphql-plugin/github-example/objects#convertednotetoissueevent)
- [CrossReferencedEvent](/docusaurus-graphql-plugin/github-example/objects#crossreferencedevent)
- [DemilestonedEvent](/docusaurus-graphql-plugin/github-example/objects#demilestonedevent)
- [DependencyGraphManifest](/docusaurus-graphql-plugin/github-example/objects#dependencygraphmanifest)
- [DeployKey](/docusaurus-graphql-plugin/github-example/objects#deploykey)
- [DeployedEvent](/docusaurus-graphql-plugin/github-example/objects#deployedevent)
- [Deployment](/docusaurus-graphql-plugin/github-example/objects#deployment)
- [DeploymentEnvironmentChangedEvent](/docusaurus-graphql-plugin/github-example/objects#deploymentenvironmentchangedevent)
- [DeploymentStatus](/docusaurus-graphql-plugin/github-example/objects#deploymentstatus)
- [DisconnectedEvent](/docusaurus-graphql-plugin/github-example/objects#disconnectedevent)
- [Enterprise](/docusaurus-graphql-plugin/github-example/objects#enterprise)
- [EnterpriseAdministratorInvitation](/docusaurus-graphql-plugin/github-example/objects#enterpriseadministratorinvitation)
- [EnterpriseIdentityProvider](/docusaurus-graphql-plugin/github-example/objects#enterpriseidentityprovider)
- [EnterpriseRepositoryInfo](/docusaurus-graphql-plugin/github-example/objects#enterpriserepositoryinfo)
- [EnterpriseServerInstallation](/docusaurus-graphql-plugin/github-example/objects#enterpriseserverinstallation)
- [EnterpriseServerUserAccount](/docusaurus-graphql-plugin/github-example/objects#enterpriseserveruseraccount)
- [EnterpriseServerUserAccountEmail](/docusaurus-graphql-plugin/github-example/objects#enterpriseserveruseraccountemail)
- [EnterpriseServerUserAccountsUpload](/docusaurus-graphql-plugin/github-example/objects#enterpriseserveruseraccountsupload)
- [EnterpriseUserAccount](/docusaurus-graphql-plugin/github-example/objects#enterpriseuseraccount)
- [ExternalIdentity](/docusaurus-graphql-plugin/github-example/objects#externalidentity)
- [Gist](/docusaurus-graphql-plugin/github-example/objects#gist)
- [GistComment](/docusaurus-graphql-plugin/github-example/objects#gistcomment)
- [HeadRefDeletedEvent](/docusaurus-graphql-plugin/github-example/objects#headrefdeletedevent)
- [HeadRefForcePushedEvent](/docusaurus-graphql-plugin/github-example/objects#headrefforcepushedevent)
- [HeadRefRestoredEvent](/docusaurus-graphql-plugin/github-example/objects#headrefrestoredevent)
- [IpAllowListEntry](/docusaurus-graphql-plugin/github-example/objects#ipallowlistentry)
- [Issue](/docusaurus-graphql-plugin/github-example/objects#issue)
- [IssueComment](/docusaurus-graphql-plugin/github-example/objects#issuecomment)
- [Label](/docusaurus-graphql-plugin/github-example/objects#label)
- [LabeledEvent](/docusaurus-graphql-plugin/github-example/objects#labeledevent)
- [Language](/docusaurus-graphql-plugin/github-example/objects#language)
- [License](/docusaurus-graphql-plugin/github-example/objects#license)
- [LockedEvent](/docusaurus-graphql-plugin/github-example/objects#lockedevent)
- [Mannequin](/docusaurus-graphql-plugin/github-example/objects#mannequin)
- [MarkedAsDuplicateEvent](/docusaurus-graphql-plugin/github-example/objects#markedasduplicateevent)
- [MarketplaceCategory](/docusaurus-graphql-plugin/github-example/objects#marketplacecategory)
- [MarketplaceListing](/docusaurus-graphql-plugin/github-example/objects#marketplacelisting)
- [MembersCanDeleteReposClearAuditEntry](/docusaurus-graphql-plugin/github-example/objects#memberscandeletereposclearauditentry)
- [MembersCanDeleteReposDisableAuditEntry](/docusaurus-graphql-plugin/github-example/objects#memberscandeletereposdisableauditentry)
- [MembersCanDeleteReposEnableAuditEntry](/docusaurus-graphql-plugin/github-example/objects#memberscandeletereposenableauditentry)
- [MentionedEvent](/docusaurus-graphql-plugin/github-example/objects#mentionedevent)
- [MergedEvent](/docusaurus-graphql-plugin/github-example/objects#mergedevent)
- [Milestone](/docusaurus-graphql-plugin/github-example/objects#milestone)
- [MilestonedEvent](/docusaurus-graphql-plugin/github-example/objects#milestonedevent)
- [MovedColumnsInProjectEvent](/docusaurus-graphql-plugin/github-example/objects#movedcolumnsinprojectevent)
- [OauthApplicationCreateAuditEntry](/docusaurus-graphql-plugin/github-example/objects#oauthapplicationcreateauditentry)
- [OrgAddBillingManagerAuditEntry](/docusaurus-graphql-plugin/github-example/objects#orgaddbillingmanagerauditentry)
- [OrgAddMemberAuditEntry](/docusaurus-graphql-plugin/github-example/objects#orgaddmemberauditentry)
- [OrgBlockUserAuditEntry](/docusaurus-graphql-plugin/github-example/objects#orgblockuserauditentry)
- [OrgConfigDisableCollaboratorsOnlyAuditEntry](/docusaurus-graphql-plugin/github-example/objects#orgconfigdisablecollaboratorsonlyauditentry)
- [OrgConfigEnableCollaboratorsOnlyAuditEntry](/docusaurus-graphql-plugin/github-example/objects#orgconfigenablecollaboratorsonlyauditentry)
- [OrgCreateAuditEntry](/docusaurus-graphql-plugin/github-example/objects#orgcreateauditentry)
- [OrgDisableOauthAppRestrictionsAuditEntry](/docusaurus-graphql-plugin/github-example/objects#orgdisableoauthapprestrictionsauditentry)
- [OrgDisableSamlAuditEntry](/docusaurus-graphql-plugin/github-example/objects#orgdisablesamlauditentry)
- [OrgDisableTwoFactorRequirementAuditEntry](/docusaurus-graphql-plugin/github-example/objects#orgdisabletwofactorrequirementauditentry)
- [OrgEnableOauthAppRestrictionsAuditEntry](/docusaurus-graphql-plugin/github-example/objects#orgenableoauthapprestrictionsauditentry)
- [OrgEnableSamlAuditEntry](/docusaurus-graphql-plugin/github-example/objects#orgenablesamlauditentry)
- [OrgEnableTwoFactorRequirementAuditEntry](/docusaurus-graphql-plugin/github-example/objects#orgenabletwofactorrequirementauditentry)
- [OrgInviteMemberAuditEntry](/docusaurus-graphql-plugin/github-example/objects#orginvitememberauditentry)
- [OrgInviteToBusinessAuditEntry](/docusaurus-graphql-plugin/github-example/objects#orginvitetobusinessauditentry)
- [OrgOauthAppAccessApprovedAuditEntry](/docusaurus-graphql-plugin/github-example/objects#orgoauthappaccessapprovedauditentry)
- [OrgOauthAppAccessDeniedAuditEntry](/docusaurus-graphql-plugin/github-example/objects#orgoauthappaccessdeniedauditentry)
- [OrgOauthAppAccessRequestedAuditEntry](/docusaurus-graphql-plugin/github-example/objects#orgoauthappaccessrequestedauditentry)
- [OrgRemoveBillingManagerAuditEntry](/docusaurus-graphql-plugin/github-example/objects#orgremovebillingmanagerauditentry)
- [OrgRemoveMemberAuditEntry](/docusaurus-graphql-plugin/github-example/objects#orgremovememberauditentry)
- [OrgRemoveOutsideCollaboratorAuditEntry](/docusaurus-graphql-plugin/github-example/objects#orgremoveoutsidecollaboratorauditentry)
- [OrgRestoreMemberAuditEntry](/docusaurus-graphql-plugin/github-example/objects#orgrestorememberauditentry)
- [OrgUnblockUserAuditEntry](/docusaurus-graphql-plugin/github-example/objects#orgunblockuserauditentry)
- [OrgUpdateDefaultRepositoryPermissionAuditEntry](/docusaurus-graphql-plugin/github-example/objects#orgupdatedefaultrepositorypermissionauditentry)
- [OrgUpdateMemberAuditEntry](/docusaurus-graphql-plugin/github-example/objects#orgupdatememberauditentry)
- [OrgUpdateMemberRepositoryCreationPermissionAuditEntry](/docusaurus-graphql-plugin/github-example/objects#orgupdatememberrepositorycreationpermissionauditentry)
- [OrgUpdateMemberRepositoryInvitationPermissionAuditEntry](/docusaurus-graphql-plugin/github-example/objects#orgupdatememberrepositoryinvitationpermissionauditentry)
- [Organization](/docusaurus-graphql-plugin/github-example/objects#organization)
- [OrganizationIdentityProvider](/docusaurus-graphql-plugin/github-example/objects#organizationidentityprovider)
- [OrganizationInvitation](/docusaurus-graphql-plugin/github-example/objects#organizationinvitation)
- [Package](/docusaurus-graphql-plugin/github-example/objects#package)
- [PackageFile](/docusaurus-graphql-plugin/github-example/objects#packagefile)
- [PackageTag](/docusaurus-graphql-plugin/github-example/objects#packagetag)
- [PackageVersion](/docusaurus-graphql-plugin/github-example/objects#packageversion)
- [PinnedEvent](/docusaurus-graphql-plugin/github-example/objects#pinnedevent)
- [PinnedIssue](/docusaurus-graphql-plugin/github-example/objects#pinnedissue)
- [PrivateRepositoryForkingDisableAuditEntry](/docusaurus-graphql-plugin/github-example/objects#privaterepositoryforkingdisableauditentry)
- [PrivateRepositoryForkingEnableAuditEntry](/docusaurus-graphql-plugin/github-example/objects#privaterepositoryforkingenableauditentry)
- [Project](/docusaurus-graphql-plugin/github-example/objects#project)
- [ProjectCard](/docusaurus-graphql-plugin/github-example/objects#projectcard)
- [ProjectColumn](/docusaurus-graphql-plugin/github-example/objects#projectcolumn)
- [PublicKey](/docusaurus-graphql-plugin/github-example/objects#publickey)
- [PullRequest](/docusaurus-graphql-plugin/github-example/objects#pullrequest)
- [PullRequestCommit](/docusaurus-graphql-plugin/github-example/objects#pullrequestcommit)
- [PullRequestCommitCommentThread](/docusaurus-graphql-plugin/github-example/objects#pullrequestcommitcommentthread)
- [PullRequestReview](/docusaurus-graphql-plugin/github-example/objects#pullrequestreview)
- [PullRequestReviewComment](/docusaurus-graphql-plugin/github-example/objects#pullrequestreviewcomment)
- [PullRequestReviewThread](/docusaurus-graphql-plugin/github-example/objects#pullrequestreviewthread)
- [Push](/docusaurus-graphql-plugin/github-example/objects#push)
- [PushAllowance](/docusaurus-graphql-plugin/github-example/objects#pushallowance)
- [Reaction](/docusaurus-graphql-plugin/github-example/objects#reaction)
- [ReadyForReviewEvent](/docusaurus-graphql-plugin/github-example/objects#readyforreviewevent)
- [Ref](/docusaurus-graphql-plugin/github-example/objects#ref)
- [ReferencedEvent](/docusaurus-graphql-plugin/github-example/objects#referencedevent)
- [Release](/docusaurus-graphql-plugin/github-example/objects#release)
- [ReleaseAsset](/docusaurus-graphql-plugin/github-example/objects#releaseasset)
- [RemovedFromProjectEvent](/docusaurus-graphql-plugin/github-example/objects#removedfromprojectevent)
- [RenamedTitleEvent](/docusaurus-graphql-plugin/github-example/objects#renamedtitleevent)
- [ReopenedEvent](/docusaurus-graphql-plugin/github-example/objects#reopenedevent)
- [RepoAccessAuditEntry](/docusaurus-graphql-plugin/github-example/objects#repoaccessauditentry)
- [RepoAddMemberAuditEntry](/docusaurus-graphql-plugin/github-example/objects#repoaddmemberauditentry)
- [RepoAddTopicAuditEntry](/docusaurus-graphql-plugin/github-example/objects#repoaddtopicauditentry)
- [RepoArchivedAuditEntry](/docusaurus-graphql-plugin/github-example/objects#repoarchivedauditentry)
- [RepoChangeMergeSettingAuditEntry](/docusaurus-graphql-plugin/github-example/objects#repochangemergesettingauditentry)
- [RepoConfigDisableAnonymousGitAccessAuditEntry](/docusaurus-graphql-plugin/github-example/objects#repoconfigdisableanonymousgitaccessauditentry)
- [RepoConfigDisableCollaboratorsOnlyAuditEntry](/docusaurus-graphql-plugin/github-example/objects#repoconfigdisablecollaboratorsonlyauditentry)
- [RepoConfigDisableContributorsOnlyAuditEntry](/docusaurus-graphql-plugin/github-example/objects#repoconfigdisablecontributorsonlyauditentry)
- [RepoConfigDisableSockpuppetDisallowedAuditEntry](/docusaurus-graphql-plugin/github-example/objects#repoconfigdisablesockpuppetdisallowedauditentry)
- [RepoConfigEnableAnonymousGitAccessAuditEntry](/docusaurus-graphql-plugin/github-example/objects#repoconfigenableanonymousgitaccessauditentry)
- [RepoConfigEnableCollaboratorsOnlyAuditEntry](/docusaurus-graphql-plugin/github-example/objects#repoconfigenablecollaboratorsonlyauditentry)
- [RepoConfigEnableContributorsOnlyAuditEntry](/docusaurus-graphql-plugin/github-example/objects#repoconfigenablecontributorsonlyauditentry)
- [RepoConfigEnableSockpuppetDisallowedAuditEntry](/docusaurus-graphql-plugin/github-example/objects#repoconfigenablesockpuppetdisallowedauditentry)
- [RepoConfigLockAnonymousGitAccessAuditEntry](/docusaurus-graphql-plugin/github-example/objects#repoconfiglockanonymousgitaccessauditentry)
- [RepoConfigUnlockAnonymousGitAccessAuditEntry](/docusaurus-graphql-plugin/github-example/objects#repoconfigunlockanonymousgitaccessauditentry)
- [RepoCreateAuditEntry](/docusaurus-graphql-plugin/github-example/objects#repocreateauditentry)
- [RepoDestroyAuditEntry](/docusaurus-graphql-plugin/github-example/objects#repodestroyauditentry)
- [RepoRemoveMemberAuditEntry](/docusaurus-graphql-plugin/github-example/objects#reporemovememberauditentry)
- [RepoRemoveTopicAuditEntry](/docusaurus-graphql-plugin/github-example/objects#reporemovetopicauditentry)
- [Repository](/docusaurus-graphql-plugin/github-example/objects#repository)
- [RepositoryInvitation](/docusaurus-graphql-plugin/github-example/objects#repositoryinvitation)
- [RepositoryTopic](/docusaurus-graphql-plugin/github-example/objects#repositorytopic)
- [RepositoryVisibilityChangeDisableAuditEntry](/docusaurus-graphql-plugin/github-example/objects#repositoryvisibilitychangedisableauditentry)
- [RepositoryVisibilityChangeEnableAuditEntry](/docusaurus-graphql-plugin/github-example/objects#repositoryvisibilitychangeenableauditentry)
- [RepositoryVulnerabilityAlert](/docusaurus-graphql-plugin/github-example/objects#repositoryvulnerabilityalert)
- [ReviewDismissalAllowance](/docusaurus-graphql-plugin/github-example/objects#reviewdismissalallowance)
- [ReviewDismissedEvent](/docusaurus-graphql-plugin/github-example/objects#reviewdismissedevent)
- [ReviewRequest](/docusaurus-graphql-plugin/github-example/objects#reviewrequest)
- [ReviewRequestRemovedEvent](/docusaurus-graphql-plugin/github-example/objects#reviewrequestremovedevent)
- [ReviewRequestedEvent](/docusaurus-graphql-plugin/github-example/objects#reviewrequestedevent)
- [SavedReply](/docusaurus-graphql-plugin/github-example/objects#savedreply)
- [SecurityAdvisory](/docusaurus-graphql-plugin/github-example/objects#securityadvisory)
- [SponsorsListing](/docusaurus-graphql-plugin/github-example/objects#sponsorslisting)
- [SponsorsTier](/docusaurus-graphql-plugin/github-example/objects#sponsorstier)
- [Sponsorship](/docusaurus-graphql-plugin/github-example/objects#sponsorship)
- [Status](/docusaurus-graphql-plugin/github-example/objects#status)
- [StatusCheckRollup](/docusaurus-graphql-plugin/github-example/objects#statuscheckrollup)
- [StatusContext](/docusaurus-graphql-plugin/github-example/objects#statuscontext)
- [SubscribedEvent](/docusaurus-graphql-plugin/github-example/objects#subscribedevent)
- [Tag](/docusaurus-graphql-plugin/github-example/objects#tag)
- [Team](/docusaurus-graphql-plugin/github-example/objects#team)
- [TeamAddMemberAuditEntry](/docusaurus-graphql-plugin/github-example/objects#teamaddmemberauditentry)
- [TeamAddRepositoryAuditEntry](/docusaurus-graphql-plugin/github-example/objects#teamaddrepositoryauditentry)
- [TeamChangeParentTeamAuditEntry](/docusaurus-graphql-plugin/github-example/objects#teamchangeparentteamauditentry)
- [TeamDiscussion](/docusaurus-graphql-plugin/github-example/objects#teamdiscussion)
- [TeamDiscussionComment](/docusaurus-graphql-plugin/github-example/objects#teamdiscussioncomment)
- [TeamRemoveMemberAuditEntry](/docusaurus-graphql-plugin/github-example/objects#teamremovememberauditentry)
- [TeamRemoveRepositoryAuditEntry](/docusaurus-graphql-plugin/github-example/objects#teamremoverepositoryauditentry)
- [Topic](/docusaurus-graphql-plugin/github-example/objects#topic)
- [TransferredEvent](/docusaurus-graphql-plugin/github-example/objects#transferredevent)
- [Tree](/docusaurus-graphql-plugin/github-example/objects#tree)
- [UnassignedEvent](/docusaurus-graphql-plugin/github-example/objects#unassignedevent)
- [UnlabeledEvent](/docusaurus-graphql-plugin/github-example/objects#unlabeledevent)
- [UnlockedEvent](/docusaurus-graphql-plugin/github-example/objects#unlockedevent)
- [UnmarkedAsDuplicateEvent](/docusaurus-graphql-plugin/github-example/objects#unmarkedasduplicateevent)
- [UnpinnedEvent](/docusaurus-graphql-plugin/github-example/objects#unpinnedevent)
- [UnsubscribedEvent](/docusaurus-graphql-plugin/github-example/objects#unsubscribedevent)
- [User](/docusaurus-graphql-plugin/github-example/objects#user)
- [UserBlockedEvent](/docusaurus-graphql-plugin/github-example/objects#userblockedevent)
- [UserContentEdit](/docusaurus-graphql-plugin/github-example/objects#usercontentedit)
- [UserStatus](/docusaurus-graphql-plugin/github-example/objects#userstatus)
- [VerifiableDomain](/docusaurus-graphql-plugin/github-example/objects#verifiabledomain)

<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#id"><code>ID!</code></a>
</td>
<td>
<p>ID of the object.</p>
</td>
</tr>
</tbody>
</table>

## OauthApplicationAuditEntryData

Metadata for an audit entry with action oauth_application.*

<p style={{ marginBottom: "0.4em" }}><strong>Implemented by</strong></p>

- [OauthApplicationCreateAuditEntry](/docusaurus-graphql-plugin/github-example/objects#oauthapplicationcreateauditentry)
- [OrgOauthAppAccessApprovedAuditEntry](/docusaurus-graphql-plugin/github-example/objects#orgoauthappaccessapprovedauditentry)
- [OrgOauthAppAccessDeniedAuditEntry](/docusaurus-graphql-plugin/github-example/objects#orgoauthappaccessdeniedauditentry)
- [OrgOauthAppAccessRequestedAuditEntry](/docusaurus-graphql-plugin/github-example/objects#orgoauthappaccessrequestedauditentry)

<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
oauthApplicationName<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#string"><code>String</code></a>
</td>
<td>
<p>The name of the OAuth Application.</p>
</td>
</tr>
<tr>
<td>
oauthApplicationResourcePath<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#uri"><code>URI</code></a>
</td>
<td>
<p>The HTTP path for the OAuth Application</p>
</td>
</tr>
<tr>
<td>
oauthApplicationUrl<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#uri"><code>URI</code></a>
</td>
<td>
<p>The HTTP URL for the OAuth Application</p>
</td>
</tr>
</tbody>
</table>

## OrganizationAuditEntryData

Metadata for an audit entry with action org.*

<p style={{ marginBottom: "0.4em" }}><strong>Implemented by</strong></p>

- [MembersCanDeleteReposClearAuditEntry](/docusaurus-graphql-plugin/github-example/objects#memberscandeletereposclearauditentry)
- [MembersCanDeleteReposDisableAuditEntry](/docusaurus-graphql-plugin/github-example/objects#memberscandeletereposdisableauditentry)
- [MembersCanDeleteReposEnableAuditEntry](/docusaurus-graphql-plugin/github-example/objects#memberscandeletereposenableauditentry)
- [OauthApplicationCreateAuditEntry](/docusaurus-graphql-plugin/github-example/objects#oauthapplicationcreateauditentry)
- [OrgAddBillingManagerAuditEntry](/docusaurus-graphql-plugin/github-example/objects#orgaddbillingmanagerauditentry)
- [OrgAddMemberAuditEntry](/docusaurus-graphql-plugin/github-example/objects#orgaddmemberauditentry)
- [OrgBlockUserAuditEntry](/docusaurus-graphql-plugin/github-example/objects#orgblockuserauditentry)
- [OrgConfigDisableCollaboratorsOnlyAuditEntry](/docusaurus-graphql-plugin/github-example/objects#orgconfigdisablecollaboratorsonlyauditentry)
- [OrgConfigEnableCollaboratorsOnlyAuditEntry](/docusaurus-graphql-plugin/github-example/objects#orgconfigenablecollaboratorsonlyauditentry)
- [OrgCreateAuditEntry](/docusaurus-graphql-plugin/github-example/objects#orgcreateauditentry)
- [OrgDisableOauthAppRestrictionsAuditEntry](/docusaurus-graphql-plugin/github-example/objects#orgdisableoauthapprestrictionsauditentry)
- [OrgDisableSamlAuditEntry](/docusaurus-graphql-plugin/github-example/objects#orgdisablesamlauditentry)
- [OrgDisableTwoFactorRequirementAuditEntry](/docusaurus-graphql-plugin/github-example/objects#orgdisabletwofactorrequirementauditentry)
- [OrgEnableOauthAppRestrictionsAuditEntry](/docusaurus-graphql-plugin/github-example/objects#orgenableoauthapprestrictionsauditentry)
- [OrgEnableSamlAuditEntry](/docusaurus-graphql-plugin/github-example/objects#orgenablesamlauditentry)
- [OrgEnableTwoFactorRequirementAuditEntry](/docusaurus-graphql-plugin/github-example/objects#orgenabletwofactorrequirementauditentry)
- [OrgInviteMemberAuditEntry](/docusaurus-graphql-plugin/github-example/objects#orginvitememberauditentry)
- [OrgInviteToBusinessAuditEntry](/docusaurus-graphql-plugin/github-example/objects#orginvitetobusinessauditentry)
- [OrgOauthAppAccessApprovedAuditEntry](/docusaurus-graphql-plugin/github-example/objects#orgoauthappaccessapprovedauditentry)
- [OrgOauthAppAccessDeniedAuditEntry](/docusaurus-graphql-plugin/github-example/objects#orgoauthappaccessdeniedauditentry)
- [OrgOauthAppAccessRequestedAuditEntry](/docusaurus-graphql-plugin/github-example/objects#orgoauthappaccessrequestedauditentry)
- [OrgRemoveBillingManagerAuditEntry](/docusaurus-graphql-plugin/github-example/objects#orgremovebillingmanagerauditentry)
- [OrgRemoveMemberAuditEntry](/docusaurus-graphql-plugin/github-example/objects#orgremovememberauditentry)
- [OrgRemoveOutsideCollaboratorAuditEntry](/docusaurus-graphql-plugin/github-example/objects#orgremoveoutsidecollaboratorauditentry)
- [OrgRestoreMemberAuditEntry](/docusaurus-graphql-plugin/github-example/objects#orgrestorememberauditentry)
- [OrgRestoreMemberMembershipOrganizationAuditEntryData](/docusaurus-graphql-plugin/github-example/objects#orgrestoremembermembershiporganizationauditentrydata)
- [OrgUnblockUserAuditEntry](/docusaurus-graphql-plugin/github-example/objects#orgunblockuserauditentry)
- [OrgUpdateDefaultRepositoryPermissionAuditEntry](/docusaurus-graphql-plugin/github-example/objects#orgupdatedefaultrepositorypermissionauditentry)
- [OrgUpdateMemberAuditEntry](/docusaurus-graphql-plugin/github-example/objects#orgupdatememberauditentry)
- [OrgUpdateMemberRepositoryCreationPermissionAuditEntry](/docusaurus-graphql-plugin/github-example/objects#orgupdatememberrepositorycreationpermissionauditentry)
- [OrgUpdateMemberRepositoryInvitationPermissionAuditEntry](/docusaurus-graphql-plugin/github-example/objects#orgupdatememberrepositoryinvitationpermissionauditentry)
- [PrivateRepositoryForkingDisableAuditEntry](/docusaurus-graphql-plugin/github-example/objects#privaterepositoryforkingdisableauditentry)
- [PrivateRepositoryForkingEnableAuditEntry](/docusaurus-graphql-plugin/github-example/objects#privaterepositoryforkingenableauditentry)
- [RepoAccessAuditEntry](/docusaurus-graphql-plugin/github-example/objects#repoaccessauditentry)
- [RepoAddMemberAuditEntry](/docusaurus-graphql-plugin/github-example/objects#repoaddmemberauditentry)
- [RepoAddTopicAuditEntry](/docusaurus-graphql-plugin/github-example/objects#repoaddtopicauditentry)
- [RepoArchivedAuditEntry](/docusaurus-graphql-plugin/github-example/objects#repoarchivedauditentry)
- [RepoChangeMergeSettingAuditEntry](/docusaurus-graphql-plugin/github-example/objects#repochangemergesettingauditentry)
- [RepoConfigDisableAnonymousGitAccessAuditEntry](/docusaurus-graphql-plugin/github-example/objects#repoconfigdisableanonymousgitaccessauditentry)
- [RepoConfigDisableCollaboratorsOnlyAuditEntry](/docusaurus-graphql-plugin/github-example/objects#repoconfigdisablecollaboratorsonlyauditentry)
- [RepoConfigDisableContributorsOnlyAuditEntry](/docusaurus-graphql-plugin/github-example/objects#repoconfigdisablecontributorsonlyauditentry)
- [RepoConfigDisableSockpuppetDisallowedAuditEntry](/docusaurus-graphql-plugin/github-example/objects#repoconfigdisablesockpuppetdisallowedauditentry)
- [RepoConfigEnableAnonymousGitAccessAuditEntry](/docusaurus-graphql-plugin/github-example/objects#repoconfigenableanonymousgitaccessauditentry)
- [RepoConfigEnableCollaboratorsOnlyAuditEntry](/docusaurus-graphql-plugin/github-example/objects#repoconfigenablecollaboratorsonlyauditentry)
- [RepoConfigEnableContributorsOnlyAuditEntry](/docusaurus-graphql-plugin/github-example/objects#repoconfigenablecontributorsonlyauditentry)
- [RepoConfigEnableSockpuppetDisallowedAuditEntry](/docusaurus-graphql-plugin/github-example/objects#repoconfigenablesockpuppetdisallowedauditentry)
- [RepoConfigLockAnonymousGitAccessAuditEntry](/docusaurus-graphql-plugin/github-example/objects#repoconfiglockanonymousgitaccessauditentry)
- [RepoConfigUnlockAnonymousGitAccessAuditEntry](/docusaurus-graphql-plugin/github-example/objects#repoconfigunlockanonymousgitaccessauditentry)
- [RepoCreateAuditEntry](/docusaurus-graphql-plugin/github-example/objects#repocreateauditentry)
- [RepoDestroyAuditEntry](/docusaurus-graphql-plugin/github-example/objects#repodestroyauditentry)
- [RepoRemoveMemberAuditEntry](/docusaurus-graphql-plugin/github-example/objects#reporemovememberauditentry)
- [RepoRemoveTopicAuditEntry](/docusaurus-graphql-plugin/github-example/objects#reporemovetopicauditentry)
- [RepositoryVisibilityChangeDisableAuditEntry](/docusaurus-graphql-plugin/github-example/objects#repositoryvisibilitychangedisableauditentry)
- [RepositoryVisibilityChangeEnableAuditEntry](/docusaurus-graphql-plugin/github-example/objects#repositoryvisibilitychangeenableauditentry)
- [TeamAddMemberAuditEntry](/docusaurus-graphql-plugin/github-example/objects#teamaddmemberauditentry)
- [TeamAddRepositoryAuditEntry](/docusaurus-graphql-plugin/github-example/objects#teamaddrepositoryauditentry)
- [TeamChangeParentTeamAuditEntry](/docusaurus-graphql-plugin/github-example/objects#teamchangeparentteamauditentry)
- [TeamRemoveMemberAuditEntry](/docusaurus-graphql-plugin/github-example/objects#teamremovememberauditentry)
- [TeamRemoveRepositoryAuditEntry](/docusaurus-graphql-plugin/github-example/objects#teamremoverepositoryauditentry)

<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
organization<br />
<a href="/docusaurus-graphql-plugin/github-example/objects#organization"><code>Organization</code></a>
</td>
<td>
<p>The Organization associated with the Audit Entry.</p>
</td>
</tr>
<tr>
<td>
organizationName<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#string"><code>String</code></a>
</td>
<td>
<p>The name of the Organization.</p>
</td>
</tr>
<tr>
<td>
organizationResourcePath<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#uri"><code>URI</code></a>
</td>
<td>
<p>The HTTP path for the organization</p>
</td>
</tr>
<tr>
<td>
organizationUrl<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#uri"><code>URI</code></a>
</td>
<td>
<p>The HTTP URL for the organization</p>
</td>
</tr>
</tbody>
</table>

## PackageOwner

Represents an owner of a package.

<p style={{ marginBottom: "0.4em" }}><strong>Implemented by</strong></p>

- [Organization](/docusaurus-graphql-plugin/github-example/objects#organization)
- [Repository](/docusaurus-graphql-plugin/github-example/objects#repository)
- [User](/docusaurus-graphql-plugin/github-example/objects#user)

<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#id"><code>ID!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
packages<br />
<a href="/docusaurus-graphql-plugin/github-example/objects#packageconnection"><code>PackageConnection!</code></a>
</td>
<td>
<p>A list of packages under the owner.</p>

<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
after<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#string"><code>String</code></a>
</td>
<td>
<p>Returns the elements in the list that come after the specified cursor.</p>
</td>
</tr>
<tr>
<td>
before<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#string"><code>String</code></a>
</td>
<td>
<p>Returns the elements in the list that come before the specified cursor.</p>
</td>
</tr>
<tr>
<td>
first<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#int"><code>Int</code></a>
</td>
<td>
<p>Returns the first <em>n</em> elements from the list.</p>
</td>
</tr>
<tr>
<td>
last<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#int"><code>Int</code></a>
</td>
<td>
<p>Returns the last <em>n</em> elements from the list.</p>
</td>
</tr>
<tr>
<td>
names<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#string"><code>[String]</code></a>
</td>
<td>
<p>Find packages by their names.</p>
</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docusaurus-graphql-plugin/github-example/inputObjects#packageorder"><code>PackageOrder</code></a>
</td>
<td>
<p>Ordering of the returned packages.</p>
</td>
</tr>
<tr>
<td>
packageType<br />
<a href="/docusaurus-graphql-plugin/github-example/enums#packagetype"><code>PackageType</code></a>
</td>
<td>
<p>Filter registry package by type.</p>
</td>
</tr>
<tr>
<td>
repositoryId<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#id"><code>ID</code></a>
</td>
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

<p style={{ marginBottom: "0.4em" }}><strong>Implemented by</strong></p>

- [Organization](/docusaurus-graphql-plugin/github-example/objects#organization)
- [User](/docusaurus-graphql-plugin/github-example/objects#user)

<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
anyPinnableItems<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>
<p>Determine if this repository owner has any items that can be pinned to their profile.</p>

<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
type<br />
<a href="/docusaurus-graphql-plugin/github-example/enums#pinnableitemtype"><code>PinnableItemType</code></a>
</td>
<td>
<p>Filter to only a particular kind of pinnable item.</p>
</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td>
email<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#string"><code>String</code></a>
</td>
<td>
<p>The public profile email.</p>
</td>
</tr>
<tr>
<td>
id<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#id"><code>ID!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
itemShowcase<br />
<a href="/docusaurus-graphql-plugin/github-example/objects#profileitemshowcase"><code>ProfileItemShowcase!</code></a>
</td>
<td>
<p>Showcases a selection of repositories and gists that the profile owner has
either curated or that have been selected automatically based on popularity.</p>
</td>
</tr>
<tr>
<td>
location<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#string"><code>String</code></a>
</td>
<td>
<p>The public profile location.</p>
</td>
</tr>
<tr>
<td>
login<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#string"><code>String!</code></a>
</td>
<td>
<p>The username used to login.</p>
</td>
</tr>
<tr>
<td>
name<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#string"><code>String</code></a>
</td>
<td>
<p>The public profile name.</p>
</td>
</tr>
<tr>
<td>
pinnableItems<br />
<a href="/docusaurus-graphql-plugin/github-example/objects#pinnableitemconnection"><code>PinnableItemConnection!</code></a>
</td>
<td>
<p>A list of repositories and gists this profile owner can pin to their profile.</p>

<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
after<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#string"><code>String</code></a>
</td>
<td>
<p>Returns the elements in the list that come after the specified cursor.</p>
</td>
</tr>
<tr>
<td>
before<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#string"><code>String</code></a>
</td>
<td>
<p>Returns the elements in the list that come before the specified cursor.</p>
</td>
</tr>
<tr>
<td>
first<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#int"><code>Int</code></a>
</td>
<td>
<p>Returns the first <em>n</em> elements from the list.</p>
</td>
</tr>
<tr>
<td>
last<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#int"><code>Int</code></a>
</td>
<td>
<p>Returns the last <em>n</em> elements from the list.</p>
</td>
</tr>
<tr>
<td>
types<br />
<a href="/docusaurus-graphql-plugin/github-example/enums#pinnableitemtype"><code>[PinnableItemType!]</code></a>
</td>
<td>
<p>Filter the types of pinnable items that are returned.</p>
</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td>
pinnedItems<br />
<a href="/docusaurus-graphql-plugin/github-example/objects#pinnableitemconnection"><code>PinnableItemConnection!</code></a>
</td>
<td>
<p>A list of repositories and gists this profile owner has pinned to their profile</p>

<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
after<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#string"><code>String</code></a>
</td>
<td>
<p>Returns the elements in the list that come after the specified cursor.</p>
</td>
</tr>
<tr>
<td>
before<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#string"><code>String</code></a>
</td>
<td>
<p>Returns the elements in the list that come before the specified cursor.</p>
</td>
</tr>
<tr>
<td>
first<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#int"><code>Int</code></a>
</td>
<td>
<p>Returns the first <em>n</em> elements from the list.</p>
</td>
</tr>
<tr>
<td>
last<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#int"><code>Int</code></a>
</td>
<td>
<p>Returns the last <em>n</em> elements from the list.</p>
</td>
</tr>
<tr>
<td>
types<br />
<a href="/docusaurus-graphql-plugin/github-example/enums#pinnableitemtype"><code>[PinnableItemType!]</code></a>
</td>
<td>
<p>Filter the types of pinned items that are returned.</p>
</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td>
pinnedItemsRemaining<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#int"><code>Int!</code></a>
</td>
<td>
<p>Returns how many more items this profile owner can pin to their profile.</p>
</td>
</tr>
<tr>
<td>
viewerCanChangePinnedItems<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>
<p>Can the viewer pin repositories and gists to the profile?</p>
</td>
</tr>
<tr>
<td>
websiteUrl<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#uri"><code>URI</code></a>
</td>
<td>
<p>The public profile website URL.</p>
</td>
</tr>
</tbody>
</table>

## ProjectOwner

Represents an owner of a Project.

<p style={{ marginBottom: "0.4em" }}><strong>Implemented by</strong></p>

- [Organization](/docusaurus-graphql-plugin/github-example/objects#organization)
- [Repository](/docusaurus-graphql-plugin/github-example/objects#repository)
- [User](/docusaurus-graphql-plugin/github-example/objects#user)

<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#id"><code>ID!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
project<br />
<a href="/docusaurus-graphql-plugin/github-example/objects#project"><code>Project</code></a>
</td>
<td>
<p>Find project by number.</p>

<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
number<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#int"><code>Int!</code></a>
</td>
<td>
<p>The project number to find.</p>
</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td>
projects<br />
<a href="/docusaurus-graphql-plugin/github-example/objects#projectconnection"><code>ProjectConnection!</code></a>
</td>
<td>
<p>A list of projects under the owner.</p>

<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
after<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#string"><code>String</code></a>
</td>
<td>
<p>Returns the elements in the list that come after the specified cursor.</p>
</td>
</tr>
<tr>
<td>
before<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#string"><code>String</code></a>
</td>
<td>
<p>Returns the elements in the list that come before the specified cursor.</p>
</td>
</tr>
<tr>
<td>
first<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#int"><code>Int</code></a>
</td>
<td>
<p>Returns the first <em>n</em> elements from the list.</p>
</td>
</tr>
<tr>
<td>
last<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#int"><code>Int</code></a>
</td>
<td>
<p>Returns the last <em>n</em> elements from the list.</p>
</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docusaurus-graphql-plugin/github-example/inputObjects#projectorder"><code>ProjectOrder</code></a>
</td>
<td>
<p>Ordering options for projects returned from the connection</p>
</td>
</tr>
<tr>
<td>
search<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#string"><code>String</code></a>
</td>
<td>
<p>Query to search projects by, currently only searching by name.</p>
</td>
</tr>
<tr>
<td>
states<br />
<a href="/docusaurus-graphql-plugin/github-example/enums#projectstate"><code>[ProjectState!]</code></a>
</td>
<td>
<p>A list of states to filter the projects by.</p>
</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td>
projectsResourcePath<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#uri"><code>URI!</code></a>
</td>
<td>
<p>The HTTP path listing owners projects</p>
</td>
</tr>
<tr>
<td>
projectsUrl<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#uri"><code>URI!</code></a>
</td>
<td>
<p>The HTTP URL listing owners projects</p>
</td>
</tr>
<tr>
<td>
viewerCanCreateProjects<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>
<p>Can the current viewer create new projects on this owner.</p>
</td>
</tr>
</tbody>
</table>

## Reactable

Represents a subject that can be reacted on.

<p style={{ marginBottom: "0.4em" }}><strong>Implemented by</strong></p>

- [CommitComment](/docusaurus-graphql-plugin/github-example/objects#commitcomment)
- [Issue](/docusaurus-graphql-plugin/github-example/objects#issue)
- [IssueComment](/docusaurus-graphql-plugin/github-example/objects#issuecomment)
- [PullRequest](/docusaurus-graphql-plugin/github-example/objects#pullrequest)
- [PullRequestReview](/docusaurus-graphql-plugin/github-example/objects#pullrequestreview)
- [PullRequestReviewComment](/docusaurus-graphql-plugin/github-example/objects#pullrequestreviewcomment)
- [TeamDiscussion](/docusaurus-graphql-plugin/github-example/objects#teamdiscussion)
- [TeamDiscussionComment](/docusaurus-graphql-plugin/github-example/objects#teamdiscussioncomment)

<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
databaseId<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#int"><code>Int</code></a>
</td>
<td>
<p>Identifies the primary key from the database.</p>
</td>
</tr>
<tr>
<td>
id<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#id"><code>ID!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
reactionGroups<br />
<a href="/docusaurus-graphql-plugin/github-example/objects#reactiongroup"><code>[ReactionGroup!]</code></a>
</td>
<td>
<p>A list of reactions grouped by content left on the subject.</p>
</td>
</tr>
<tr>
<td>
reactions<br />
<a href="/docusaurus-graphql-plugin/github-example/objects#reactionconnection"><code>ReactionConnection!</code></a>
</td>
<td>
<p>A list of Reactions left on the Issue.</p>

<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
after<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#string"><code>String</code></a>
</td>
<td>
<p>Returns the elements in the list that come after the specified cursor.</p>
</td>
</tr>
<tr>
<td>
before<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#string"><code>String</code></a>
</td>
<td>
<p>Returns the elements in the list that come before the specified cursor.</p>
</td>
</tr>
<tr>
<td>
content<br />
<a href="/docusaurus-graphql-plugin/github-example/enums#reactioncontent"><code>ReactionContent</code></a>
</td>
<td>
<p>Allows filtering Reactions by emoji.</p>
</td>
</tr>
<tr>
<td>
first<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#int"><code>Int</code></a>
</td>
<td>
<p>Returns the first <em>n</em> elements from the list.</p>
</td>
</tr>
<tr>
<td>
last<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#int"><code>Int</code></a>
</td>
<td>
<p>Returns the last <em>n</em> elements from the list.</p>
</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docusaurus-graphql-plugin/github-example/inputObjects#reactionorder"><code>ReactionOrder</code></a>
</td>
<td>
<p>Allows specifying the order in which reactions are returned.</p>
</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td>
viewerCanReact<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>
<p>Can user react to this subject</p>
</td>
</tr>
</tbody>
</table>

## RepositoryAuditEntryData

Metadata for an audit entry with action repo.*

<p style={{ marginBottom: "0.4em" }}><strong>Implemented by</strong></p>

- [OrgRestoreMemberMembershipRepositoryAuditEntryData](/docusaurus-graphql-plugin/github-example/objects#orgrestoremembermembershiprepositoryauditentrydata)
- [PrivateRepositoryForkingDisableAuditEntry](/docusaurus-graphql-plugin/github-example/objects#privaterepositoryforkingdisableauditentry)
- [PrivateRepositoryForkingEnableAuditEntry](/docusaurus-graphql-plugin/github-example/objects#privaterepositoryforkingenableauditentry)
- [RepoAccessAuditEntry](/docusaurus-graphql-plugin/github-example/objects#repoaccessauditentry)
- [RepoAddMemberAuditEntry](/docusaurus-graphql-plugin/github-example/objects#repoaddmemberauditentry)
- [RepoAddTopicAuditEntry](/docusaurus-graphql-plugin/github-example/objects#repoaddtopicauditentry)
- [RepoArchivedAuditEntry](/docusaurus-graphql-plugin/github-example/objects#repoarchivedauditentry)
- [RepoChangeMergeSettingAuditEntry](/docusaurus-graphql-plugin/github-example/objects#repochangemergesettingauditentry)
- [RepoConfigDisableAnonymousGitAccessAuditEntry](/docusaurus-graphql-plugin/github-example/objects#repoconfigdisableanonymousgitaccessauditentry)
- [RepoConfigDisableCollaboratorsOnlyAuditEntry](/docusaurus-graphql-plugin/github-example/objects#repoconfigdisablecollaboratorsonlyauditentry)
- [RepoConfigDisableContributorsOnlyAuditEntry](/docusaurus-graphql-plugin/github-example/objects#repoconfigdisablecontributorsonlyauditentry)
- [RepoConfigDisableSockpuppetDisallowedAuditEntry](/docusaurus-graphql-plugin/github-example/objects#repoconfigdisablesockpuppetdisallowedauditentry)
- [RepoConfigEnableAnonymousGitAccessAuditEntry](/docusaurus-graphql-plugin/github-example/objects#repoconfigenableanonymousgitaccessauditentry)
- [RepoConfigEnableCollaboratorsOnlyAuditEntry](/docusaurus-graphql-plugin/github-example/objects#repoconfigenablecollaboratorsonlyauditentry)
- [RepoConfigEnableContributorsOnlyAuditEntry](/docusaurus-graphql-plugin/github-example/objects#repoconfigenablecontributorsonlyauditentry)
- [RepoConfigEnableSockpuppetDisallowedAuditEntry](/docusaurus-graphql-plugin/github-example/objects#repoconfigenablesockpuppetdisallowedauditentry)
- [RepoConfigLockAnonymousGitAccessAuditEntry](/docusaurus-graphql-plugin/github-example/objects#repoconfiglockanonymousgitaccessauditentry)
- [RepoConfigUnlockAnonymousGitAccessAuditEntry](/docusaurus-graphql-plugin/github-example/objects#repoconfigunlockanonymousgitaccessauditentry)
- [RepoCreateAuditEntry](/docusaurus-graphql-plugin/github-example/objects#repocreateauditentry)
- [RepoDestroyAuditEntry](/docusaurus-graphql-plugin/github-example/objects#repodestroyauditentry)
- [RepoRemoveMemberAuditEntry](/docusaurus-graphql-plugin/github-example/objects#reporemovememberauditentry)
- [RepoRemoveTopicAuditEntry](/docusaurus-graphql-plugin/github-example/objects#reporemovetopicauditentry)
- [TeamAddRepositoryAuditEntry](/docusaurus-graphql-plugin/github-example/objects#teamaddrepositoryauditentry)
- [TeamRemoveRepositoryAuditEntry](/docusaurus-graphql-plugin/github-example/objects#teamremoverepositoryauditentry)

<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
repository<br />
<a href="/docusaurus-graphql-plugin/github-example/objects#repository"><code>Repository</code></a>
</td>
<td>
<p>The repository associated with the action</p>
</td>
</tr>
<tr>
<td>
repositoryName<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#string"><code>String</code></a>
</td>
<td>
<p>The name of the repository</p>
</td>
</tr>
<tr>
<td>
repositoryResourcePath<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#uri"><code>URI</code></a>
</td>
<td>
<p>The HTTP path for the repository</p>
</td>
</tr>
<tr>
<td>
repositoryUrl<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#uri"><code>URI</code></a>
</td>
<td>
<p>The HTTP URL for the repository</p>
</td>
</tr>
</tbody>
</table>

## RepositoryInfo

A subset of repository info.

<p style={{ marginBottom: "0.4em" }}><strong>Implemented by</strong></p>

- [Repository](/docusaurus-graphql-plugin/github-example/objects#repository)

<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
createdAt<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#datetime"><code>DateTime!</code></a>
</td>
<td>
<p>Identifies the date and time when the object was created.</p>
</td>
</tr>
<tr>
<td>
description<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#string"><code>String</code></a>
</td>
<td>
<p>The description of the repository.</p>
</td>
</tr>
<tr>
<td>
descriptionHTML<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#html"><code>HTML!</code></a>
</td>
<td>
<p>The description of the repository rendered to HTML.</p>
</td>
</tr>
<tr>
<td>
forkCount<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#int"><code>Int!</code></a>
</td>
<td>
<p>Returns how many forks there are of this repository in the whole network.</p>
</td>
</tr>
<tr>
<td>
hasIssuesEnabled<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>
<p>Indicates if the repository has issues feature enabled.</p>
</td>
</tr>
<tr>
<td>
hasProjectsEnabled<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>
<p>Indicates if the repository has the Projects feature enabled.</p>
</td>
</tr>
<tr>
<td>
hasWikiEnabled<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>
<p>Indicates if the repository has wiki feature enabled.</p>
</td>
</tr>
<tr>
<td>
homepageUrl<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#uri"><code>URI</code></a>
</td>
<td>
<p>The repository&#39;s URL.</p>
</td>
</tr>
<tr>
<td>
isArchived<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>
<p>Indicates if the repository is unmaintained.</p>
</td>
</tr>
<tr>
<td>
isFork<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>
<p>Identifies if the repository is a fork.</p>
</td>
</tr>
<tr>
<td>
isInOrganization<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>
<p>Indicates if a repository is either owned by an organization, or is a private fork of an organization repository.</p>
</td>
</tr>
<tr>
<td>
isLocked<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>
<p>Indicates if the repository has been locked or not.</p>
</td>
</tr>
<tr>
<td>
isMirror<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>
<p>Identifies if the repository is a mirror.</p>
</td>
</tr>
<tr>
<td>
isPrivate<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>
<p>Identifies if the repository is private or internal.</p>
</td>
</tr>
<tr>
<td>
isTemplate<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>
<p>Identifies if the repository is a template that can be used to generate new repositories.</p>
</td>
</tr>
<tr>
<td>
licenseInfo<br />
<a href="/docusaurus-graphql-plugin/github-example/objects#license"><code>License</code></a>
</td>
<td>
<p>The license associated with the repository</p>
</td>
</tr>
<tr>
<td>
lockReason<br />
<a href="/docusaurus-graphql-plugin/github-example/enums#repositorylockreason"><code>RepositoryLockReason</code></a>
</td>
<td>
<p>The reason the repository has been locked.</p>
</td>
</tr>
<tr>
<td>
mirrorUrl<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#uri"><code>URI</code></a>
</td>
<td>
<p>The repository&#39;s original mirror URL.</p>
</td>
</tr>
<tr>
<td>
name<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#string"><code>String!</code></a>
</td>
<td>
<p>The name of the repository.</p>
</td>
</tr>
<tr>
<td>
nameWithOwner<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#string"><code>String!</code></a>
</td>
<td>
<p>The repository&#39;s name with owner.</p>
</td>
</tr>
<tr>
<td>
openGraphImageUrl<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#uri"><code>URI!</code></a>
</td>
<td>
<p>The image used to represent this repository in Open Graph data.</p>
</td>
</tr>
<tr>
<td>
owner<br />
<a href="/docusaurus-graphql-plugin/github-example/interfaces#repositoryowner"><code>RepositoryOwner!</code></a>
</td>
<td>
<p>The User owner of the repository.</p>
</td>
</tr>
<tr>
<td>
pushedAt<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#datetime"><code>DateTime</code></a>
</td>
<td>
<p>Identifies when the repository was last pushed to.</p>
</td>
</tr>
<tr>
<td>
resourcePath<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#uri"><code>URI!</code></a>
</td>
<td>
<p>The HTTP path for this repository</p>
</td>
</tr>
<tr>
<td>
shortDescriptionHTML<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#html"><code>HTML!</code></a>
</td>
<td>
<p>A description of the repository, rendered to HTML without any links in it.</p>

<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
limit<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#int"><code>Int</code></a>
</td>
<td>
<p>How many characters to return.</p>
</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td>
updatedAt<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#datetime"><code>DateTime!</code></a>
</td>
<td>
<p>Identifies the date and time when the object was last updated.</p>
</td>
</tr>
<tr>
<td>
url<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#uri"><code>URI!</code></a>
</td>
<td>
<p>The HTTP URL for this repository</p>
</td>
</tr>
<tr>
<td>
usesCustomOpenGraphImage<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>
<p>Whether this repository has a custom image to use with Open Graph as opposed to being represented by the owner&#39;s avatar.</p>
</td>
</tr>
</tbody>
</table>

## RepositoryNode

Represents a object that belongs to a repository.

<p style={{ marginBottom: "0.4em" }}><strong>Implemented by</strong></p>

- [CommitComment](/docusaurus-graphql-plugin/github-example/objects#commitcomment)
- [CommitCommentThread](/docusaurus-graphql-plugin/github-example/objects#commitcommentthread)
- [Issue](/docusaurus-graphql-plugin/github-example/objects#issue)
- [IssueComment](/docusaurus-graphql-plugin/github-example/objects#issuecomment)
- [PullRequest](/docusaurus-graphql-plugin/github-example/objects#pullrequest)
- [PullRequestCommitCommentThread](/docusaurus-graphql-plugin/github-example/objects#pullrequestcommitcommentthread)
- [PullRequestReview](/docusaurus-graphql-plugin/github-example/objects#pullrequestreview)
- [PullRequestReviewComment](/docusaurus-graphql-plugin/github-example/objects#pullrequestreviewcomment)
- [RepositoryVulnerabilityAlert](/docusaurus-graphql-plugin/github-example/objects#repositoryvulnerabilityalert)

<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
repository<br />
<a href="/docusaurus-graphql-plugin/github-example/objects#repository"><code>Repository!</code></a>
</td>
<td>
<p>The repository associated with this node.</p>
</td>
</tr>
</tbody>
</table>

## RepositoryOwner

Represents an owner of a Repository.

<p style={{ marginBottom: "0.4em" }}><strong>Implemented by</strong></p>

- [Organization](/docusaurus-graphql-plugin/github-example/objects#organization)
- [User](/docusaurus-graphql-plugin/github-example/objects#user)

<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
avatarUrl<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#uri"><code>URI!</code></a>
</td>
<td>
<p>A URL pointing to the owner&#39;s public avatar.</p>

<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
size<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#int"><code>Int</code></a>
</td>
<td>
<p>The size of the resulting square image.</p>
</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td>
id<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#id"><code>ID!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
login<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#string"><code>String!</code></a>
</td>
<td>
<p>The username used to login.</p>
</td>
</tr>
<tr>
<td>
repositories<br />
<a href="/docusaurus-graphql-plugin/github-example/objects#repositoryconnection"><code>RepositoryConnection!</code></a>
</td>
<td>
<p>A list of repositories that the user owns.</p>

<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
affiliations<br />
<a href="/docusaurus-graphql-plugin/github-example/enums#repositoryaffiliation"><code>[RepositoryAffiliation]</code></a>
</td>
<td>
<p>Array of viewer&#39;s affiliation options for repositories returned from the
connection. For example, OWNER will include only repositories that the
current viewer owns.</p>
</td>
</tr>
<tr>
<td>
after<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#string"><code>String</code></a>
</td>
<td>
<p>Returns the elements in the list that come after the specified cursor.</p>
</td>
</tr>
<tr>
<td>
before<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#string"><code>String</code></a>
</td>
<td>
<p>Returns the elements in the list that come before the specified cursor.</p>
</td>
</tr>
<tr>
<td>
first<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#int"><code>Int</code></a>
</td>
<td>
<p>Returns the first <em>n</em> elements from the list.</p>
</td>
</tr>
<tr>
<td>
isFork<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#boolean"><code>Boolean</code></a>
</td>
<td>
<p>If non-null, filters repositories according to whether they are forks of another repository</p>
</td>
</tr>
<tr>
<td>
isLocked<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#boolean"><code>Boolean</code></a>
</td>
<td>
<p>If non-null, filters repositories according to whether they have been locked</p>
</td>
</tr>
<tr>
<td>
last<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#int"><code>Int</code></a>
</td>
<td>
<p>Returns the last <em>n</em> elements from the list.</p>
</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docusaurus-graphql-plugin/github-example/inputObjects#repositoryorder"><code>RepositoryOrder</code></a>
</td>
<td>
<p>Ordering options for repositories returned from the connection</p>
</td>
</tr>
<tr>
<td>
ownerAffiliations<br />
<a href="/docusaurus-graphql-plugin/github-example/enums#repositoryaffiliation"><code>[RepositoryAffiliation]</code></a>
</td>
<td>
<p>Array of owner&#39;s affiliation options for repositories returned from the
connection. For example, OWNER will include only repositories that the
organization or user being viewed owns.</p>
</td>
</tr>
<tr>
<td>
privacy<br />
<a href="/docusaurus-graphql-plugin/github-example/enums#repositoryprivacy"><code>RepositoryPrivacy</code></a>
</td>
<td>
<p>If non-null, filters repositories according to privacy</p>
</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td>
repository<br />
<a href="/docusaurus-graphql-plugin/github-example/objects#repository"><code>Repository</code></a>
</td>
<td>
<p>Find Repository.</p>

<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
name<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#string"><code>String!</code></a>
</td>
<td>
<p>Name of Repository to find.</p>
</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td>
resourcePath<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#uri"><code>URI!</code></a>
</td>
<td>
<p>The HTTP URL for the owner.</p>
</td>
</tr>
<tr>
<td>
url<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#uri"><code>URI!</code></a>
</td>
<td>
<p>The HTTP URL for the owner.</p>
</td>
</tr>
</tbody>
</table>

## RequirableByPullRequest

Represents a type that can be required by a pull request for merging.

<p style={{ marginBottom: "0.4em" }}><strong>Implemented by</strong></p>

- [CheckRun](/docusaurus-graphql-plugin/github-example/objects#checkrun)
- [StatusContext](/docusaurus-graphql-plugin/github-example/objects#statuscontext)

<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
isRequired<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>
<p>Whether this is required to pass before merging for a specific pull request.</p>

<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
pullRequestId<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#id"><code>ID</code></a>
</td>
<td>
<p>The id of the pull request this is required for</p>
</td>
</tr>
<tr>
<td>
pullRequestNumber<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#int"><code>Int</code></a>
</td>
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

<p style={{ marginBottom: "0.4em" }}><strong>Implemented by</strong></p>

- [Organization](/docusaurus-graphql-plugin/github-example/objects#organization)
- [User](/docusaurus-graphql-plugin/github-example/objects#user)

<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
hasSponsorsListing<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>
<p>True if this user/organization has a GitHub Sponsors listing.</p>
</td>
</tr>
<tr>
<td>
isSponsoredBy<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>
<p>Check if the given account is sponsoring this user/organization.</p>

<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
accountLogin<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#string"><code>String!</code></a>
</td>
<td>
<p>The target account&#39;s login.</p>
</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td>
isSponsoringViewer<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>
<p>True if the viewer is sponsored by this user/organization.</p>
</td>
</tr>
<tr>
<td>
sponsorsListing<br />
<a href="/docusaurus-graphql-plugin/github-example/objects#sponsorslisting"><code>SponsorsListing</code></a>
</td>
<td>
<p>The GitHub Sponsors listing for this user or organization.</p>
</td>
</tr>
<tr>
<td>
sponsorshipForViewerAsSponsor<br />
<a href="/docusaurus-graphql-plugin/github-example/objects#sponsorship"><code>Sponsorship</code></a>
</td>
<td>
<p>The viewer&#39;s sponsorship of this entity.</p>
</td>
</tr>
<tr>
<td>
sponsorshipsAsMaintainer<br />
<a href="/docusaurus-graphql-plugin/github-example/objects#sponsorshipconnection"><code>SponsorshipConnection!</code></a>
</td>
<td>
<p>This object&#39;s sponsorships as the maintainer.</p>

<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
after<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#string"><code>String</code></a>
</td>
<td>
<p>Returns the elements in the list that come after the specified cursor.</p>
</td>
</tr>
<tr>
<td>
before<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#string"><code>String</code></a>
</td>
<td>
<p>Returns the elements in the list that come before the specified cursor.</p>
</td>
</tr>
<tr>
<td>
first<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#int"><code>Int</code></a>
</td>
<td>
<p>Returns the first <em>n</em> elements from the list.</p>
</td>
</tr>
<tr>
<td>
includePrivate<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#boolean"><code>Boolean</code></a>
</td>
<td>
<p>Whether or not to include private sponsorships in the result set</p>
</td>
</tr>
<tr>
<td>
last<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#int"><code>Int</code></a>
</td>
<td>
<p>Returns the last <em>n</em> elements from the list.</p>
</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docusaurus-graphql-plugin/github-example/inputObjects#sponsorshiporder"><code>SponsorshipOrder</code></a>
</td>
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
<td>
sponsorshipsAsSponsor<br />
<a href="/docusaurus-graphql-plugin/github-example/objects#sponsorshipconnection"><code>SponsorshipConnection!</code></a>
</td>
<td>
<p>This object&#39;s sponsorships as the sponsor.</p>

<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
after<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#string"><code>String</code></a>
</td>
<td>
<p>Returns the elements in the list that come after the specified cursor.</p>
</td>
</tr>
<tr>
<td>
before<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#string"><code>String</code></a>
</td>
<td>
<p>Returns the elements in the list that come before the specified cursor.</p>
</td>
</tr>
<tr>
<td>
first<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#int"><code>Int</code></a>
</td>
<td>
<p>Returns the first <em>n</em> elements from the list.</p>
</td>
</tr>
<tr>
<td>
last<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#int"><code>Int</code></a>
</td>
<td>
<p>Returns the last <em>n</em> elements from the list.</p>
</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docusaurus-graphql-plugin/github-example/inputObjects#sponsorshiporder"><code>SponsorshipOrder</code></a>
</td>
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
<td>
viewerCanSponsor<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>
<p>Whether or not the viewer is able to sponsor this user/organization.</p>
</td>
</tr>
<tr>
<td>
viewerIsSponsoring<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>
<p>True if the viewer is sponsoring this user/organization.</p>
</td>
</tr>
</tbody>
</table>

## Starrable

Things that can be starred.

<p style={{ marginBottom: "0.4em" }}><strong>Implemented by</strong></p>

- [Gist](/docusaurus-graphql-plugin/github-example/objects#gist)
- [Repository](/docusaurus-graphql-plugin/github-example/objects#repository)
- [Topic](/docusaurus-graphql-plugin/github-example/objects#topic)

<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#id"><code>ID!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
stargazerCount<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#int"><code>Int!</code></a>
</td>
<td>
<p>Returns a count of how many stargazers there are on this object</p>
</td>
</tr>
<tr>
<td>
stargazers<br />
<a href="/docusaurus-graphql-plugin/github-example/objects#stargazerconnection"><code>StargazerConnection!</code></a>
</td>
<td>
<p>A list of users who have starred this starrable.</p>

<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
after<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#string"><code>String</code></a>
</td>
<td>
<p>Returns the elements in the list that come after the specified cursor.</p>
</td>
</tr>
<tr>
<td>
before<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#string"><code>String</code></a>
</td>
<td>
<p>Returns the elements in the list that come before the specified cursor.</p>
</td>
</tr>
<tr>
<td>
first<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#int"><code>Int</code></a>
</td>
<td>
<p>Returns the first <em>n</em> elements from the list.</p>
</td>
</tr>
<tr>
<td>
last<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#int"><code>Int</code></a>
</td>
<td>
<p>Returns the last <em>n</em> elements from the list.</p>
</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docusaurus-graphql-plugin/github-example/inputObjects#starorder"><code>StarOrder</code></a>
</td>
<td>
<p>Order for connection</p>
</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td>
viewerHasStarred<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>
<p>Returns a boolean indicating whether the viewing user has starred this starrable.</p>
</td>
</tr>
</tbody>
</table>

## Subscribable

Entities that can be subscribed to for web and email notifications.

<p style={{ marginBottom: "0.4em" }}><strong>Implemented by</strong></p>

- [Commit](/docusaurus-graphql-plugin/github-example/objects#commit)
- [Issue](/docusaurus-graphql-plugin/github-example/objects#issue)
- [PullRequest](/docusaurus-graphql-plugin/github-example/objects#pullrequest)
- [Repository](/docusaurus-graphql-plugin/github-example/objects#repository)
- [Team](/docusaurus-graphql-plugin/github-example/objects#team)
- [TeamDiscussion](/docusaurus-graphql-plugin/github-example/objects#teamdiscussion)

<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#id"><code>ID!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
viewerCanSubscribe<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>
<p>Check if the viewer is able to change their subscription status for the repository.</p>
</td>
</tr>
<tr>
<td>
viewerSubscription<br />
<a href="/docusaurus-graphql-plugin/github-example/enums#subscriptionstate"><code>SubscriptionState</code></a>
</td>
<td>
<p>Identifies if the viewer is watching, not watching, or ignoring the subscribable entity.</p>
</td>
</tr>
</tbody>
</table>

## TeamAuditEntryData

Metadata for an audit entry with action team.*

<p style={{ marginBottom: "0.4em" }}><strong>Implemented by</strong></p>

- [OrgRestoreMemberMembershipTeamAuditEntryData](/docusaurus-graphql-plugin/github-example/objects#orgrestoremembermembershipteamauditentrydata)
- [TeamAddMemberAuditEntry](/docusaurus-graphql-plugin/github-example/objects#teamaddmemberauditentry)
- [TeamAddRepositoryAuditEntry](/docusaurus-graphql-plugin/github-example/objects#teamaddrepositoryauditentry)
- [TeamChangeParentTeamAuditEntry](/docusaurus-graphql-plugin/github-example/objects#teamchangeparentteamauditentry)
- [TeamRemoveMemberAuditEntry](/docusaurus-graphql-plugin/github-example/objects#teamremovememberauditentry)
- [TeamRemoveRepositoryAuditEntry](/docusaurus-graphql-plugin/github-example/objects#teamremoverepositoryauditentry)

<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
team<br />
<a href="/docusaurus-graphql-plugin/github-example/objects#team"><code>Team</code></a>
</td>
<td>
<p>The team associated with the action</p>
</td>
</tr>
<tr>
<td>
teamName<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#string"><code>String</code></a>
</td>
<td>
<p>The name of the team</p>
</td>
</tr>
<tr>
<td>
teamResourcePath<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#uri"><code>URI</code></a>
</td>
<td>
<p>The HTTP path for this team</p>
</td>
</tr>
<tr>
<td>
teamUrl<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#uri"><code>URI</code></a>
</td>
<td>
<p>The HTTP URL for this team</p>
</td>
</tr>
</tbody>
</table>

## TopicAuditEntryData

Metadata for an audit entry with a topic.

<p style={{ marginBottom: "0.4em" }}><strong>Implemented by</strong></p>

- [RepoAddTopicAuditEntry](/docusaurus-graphql-plugin/github-example/objects#repoaddtopicauditentry)
- [RepoRemoveTopicAuditEntry](/docusaurus-graphql-plugin/github-example/objects#reporemovetopicauditentry)

<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
topic<br />
<a href="/docusaurus-graphql-plugin/github-example/objects#topic"><code>Topic</code></a>
</td>
<td>
<p>The name of the topic added to the repository</p>
</td>
</tr>
<tr>
<td>
topicName<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#string"><code>String</code></a>
</td>
<td>
<p>The name of the topic added to the repository</p>
</td>
</tr>
</tbody>
</table>

## UniformResourceLocatable

Represents a type that can be retrieved by a URL.

<p style={{ marginBottom: "0.4em" }}><strong>Implemented by</strong></p>

- [Bot](/docusaurus-graphql-plugin/github-example/objects#bot)
- [CheckRun](/docusaurus-graphql-plugin/github-example/objects#checkrun)
- [ClosedEvent](/docusaurus-graphql-plugin/github-example/objects#closedevent)
- [Commit](/docusaurus-graphql-plugin/github-example/objects#commit)
- [ConvertToDraftEvent](/docusaurus-graphql-plugin/github-example/objects#converttodraftevent)
- [CrossReferencedEvent](/docusaurus-graphql-plugin/github-example/objects#crossreferencedevent)
- [Gist](/docusaurus-graphql-plugin/github-example/objects#gist)
- [Issue](/docusaurus-graphql-plugin/github-example/objects#issue)
- [Mannequin](/docusaurus-graphql-plugin/github-example/objects#mannequin)
- [MergedEvent](/docusaurus-graphql-plugin/github-example/objects#mergedevent)
- [Milestone](/docusaurus-graphql-plugin/github-example/objects#milestone)
- [Organization](/docusaurus-graphql-plugin/github-example/objects#organization)
- [PullRequest](/docusaurus-graphql-plugin/github-example/objects#pullrequest)
- [PullRequestCommit](/docusaurus-graphql-plugin/github-example/objects#pullrequestcommit)
- [ReadyForReviewEvent](/docusaurus-graphql-plugin/github-example/objects#readyforreviewevent)
- [Release](/docusaurus-graphql-plugin/github-example/objects#release)
- [Repository](/docusaurus-graphql-plugin/github-example/objects#repository)
- [RepositoryTopic](/docusaurus-graphql-plugin/github-example/objects#repositorytopic)
- [ReviewDismissedEvent](/docusaurus-graphql-plugin/github-example/objects#reviewdismissedevent)
- [TeamDiscussion](/docusaurus-graphql-plugin/github-example/objects#teamdiscussion)
- [TeamDiscussionComment](/docusaurus-graphql-plugin/github-example/objects#teamdiscussioncomment)
- [User](/docusaurus-graphql-plugin/github-example/objects#user)

<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
resourcePath<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#uri"><code>URI!</code></a>
</td>
<td>
<p>The HTML path to this resource.</p>
</td>
</tr>
<tr>
<td>
url<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#uri"><code>URI!</code></a>
</td>
<td>
<p>The URL to this resource.</p>
</td>
</tr>
</tbody>
</table>

## Updatable

Entities that can be updated.

<p style={{ marginBottom: "0.4em" }}><strong>Implemented by</strong></p>

- [CommitComment](/docusaurus-graphql-plugin/github-example/objects#commitcomment)
- [GistComment](/docusaurus-graphql-plugin/github-example/objects#gistcomment)
- [Issue](/docusaurus-graphql-plugin/github-example/objects#issue)
- [IssueComment](/docusaurus-graphql-plugin/github-example/objects#issuecomment)
- [Project](/docusaurus-graphql-plugin/github-example/objects#project)
- [PullRequest](/docusaurus-graphql-plugin/github-example/objects#pullrequest)
- [PullRequestReview](/docusaurus-graphql-plugin/github-example/objects#pullrequestreview)
- [PullRequestReviewComment](/docusaurus-graphql-plugin/github-example/objects#pullrequestreviewcomment)
- [TeamDiscussion](/docusaurus-graphql-plugin/github-example/objects#teamdiscussion)
- [TeamDiscussionComment](/docusaurus-graphql-plugin/github-example/objects#teamdiscussioncomment)

<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
viewerCanUpdate<br />
<a href="/docusaurus-graphql-plugin/github-example/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>
<p>Check if the current viewer can update this object.</p>
</td>
</tr>
</tbody>
</table>

## UpdatableComment

Comments that can be updated.

<p style={{ marginBottom: "0.4em" }}><strong>Implemented by</strong></p>

- [CommitComment](/docusaurus-graphql-plugin/github-example/objects#commitcomment)
- [GistComment](/docusaurus-graphql-plugin/github-example/objects#gistcomment)
- [Issue](/docusaurus-graphql-plugin/github-example/objects#issue)
- [IssueComment](/docusaurus-graphql-plugin/github-example/objects#issuecomment)
- [PullRequest](/docusaurus-graphql-plugin/github-example/objects#pullrequest)
- [PullRequestReview](/docusaurus-graphql-plugin/github-example/objects#pullrequestreview)
- [PullRequestReviewComment](/docusaurus-graphql-plugin/github-example/objects#pullrequestreviewcomment)
- [TeamDiscussion](/docusaurus-graphql-plugin/github-example/objects#teamdiscussion)
- [TeamDiscussionComment](/docusaurus-graphql-plugin/github-example/objects#teamdiscussioncomment)

<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
viewerCannotUpdateReasons<br />
<a href="/docusaurus-graphql-plugin/github-example/enums#commentcannotupdatereason"><code>[CommentCannotUpdateReason!]!</code></a>
</td>
<td>
<p>Reasons why the current viewer can not update this comment.</p>
</td>
</tr>
</tbody>
</table>

