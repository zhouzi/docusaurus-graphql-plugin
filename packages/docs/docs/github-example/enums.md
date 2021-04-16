---
id: enums
title: Enums
slug: enums
---

## AuditLogOrderField

Properties by which Audit Log connections can be ordered.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>CREATED_AT</td>
<td>
<p>Order audit log entries by timestamp</p>
</td>
</tr>
</tbody>
</table>

## CheckAnnotationLevel

Represents an annotation's information level.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>FAILURE</td>
<td>
<p>An annotation indicating an inescapable error.</p>
</td>
</tr>
<tr>
<td>NOTICE</td>
<td>
<p>An annotation indicating some information.</p>
</td>
</tr>
<tr>
<td>WARNING</td>
<td>
<p>An annotation indicating an ignorable error.</p>
</td>
</tr>
</tbody>
</table>

## CheckConclusionState

The possible states for a check suite or run conclusion.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>ACTION_REQUIRED</td>
<td>
<p>The check suite or run requires action.</p>
</td>
</tr>
<tr>
<td>CANCELLED</td>
<td>
<p>The check suite or run has been cancelled.</p>
</td>
</tr>
<tr>
<td>FAILURE</td>
<td>
<p>The check suite or run has failed.</p>
</td>
</tr>
<tr>
<td>NEUTRAL</td>
<td>
<p>The check suite or run was neutral.</p>
</td>
</tr>
<tr>
<td>SKIPPED</td>
<td>
<p>The check suite or run was skipped.</p>
</td>
</tr>
<tr>
<td>STALE</td>
<td>
<p>The check suite or run was marked stale by GitHub. Only GitHub can use this conclusion.</p>
</td>
</tr>
<tr>
<td>STARTUP_FAILURE</td>
<td>
<p>The check suite or run has failed at startup.</p>
</td>
</tr>
<tr>
<td>SUCCESS</td>
<td>
<p>The check suite or run has succeeded.</p>
</td>
</tr>
<tr>
<td>TIMED_OUT</td>
<td>
<p>The check suite or run has timed out.</p>
</td>
</tr>
</tbody>
</table>

## CheckRunType

The possible types of check runs.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>ALL</td>
<td>
<p>Every check run available.</p>
</td>
</tr>
<tr>
<td>LATEST</td>
<td>
<p>The latest check run.</p>
</td>
</tr>
</tbody>
</table>

## CheckStatusState

The possible states for a check suite or run status.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>COMPLETED</td>
<td>
<p>The check suite or run has been completed.</p>
</td>
</tr>
<tr>
<td>IN_PROGRESS</td>
<td>
<p>The check suite or run is in progress.</p>
</td>
</tr>
<tr>
<td>QUEUED</td>
<td>
<p>The check suite or run has been queued.</p>
</td>
</tr>
<tr>
<td>REQUESTED</td>
<td>
<p>The check suite or run has been requested.</p>
</td>
</tr>
<tr>
<td>WAITING</td>
<td>
<p>The check suite or run is in waiting state.</p>
</td>
</tr>
</tbody>
</table>

## CollaboratorAffiliation

Collaborators affiliation level with a subject.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>ALL</td>
<td>
<p>All collaborators the authenticated user can see.</p>
</td>
</tr>
<tr>
<td>DIRECT</td>
<td>
<p>All collaborators with permissions to an organization-owned subject, regardless of organization membership status.</p>
</td>
</tr>
<tr>
<td>OUTSIDE</td>
<td>
<p>All outside collaborators of an organization-owned subject.</p>
</td>
</tr>
</tbody>
</table>

## CommentAuthorAssociation

A comment author association with repository.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>COLLABORATOR</td>
<td>
<p>Author has been invited to collaborate on the repository.</p>
</td>
</tr>
<tr>
<td>CONTRIBUTOR</td>
<td>
<p>Author has previously committed to the repository.</p>
</td>
</tr>
<tr>
<td>FIRST_TIMER</td>
<td>
<p>Author has not previously committed to GitHub.</p>
</td>
</tr>
<tr>
<td>FIRST_TIME_CONTRIBUTOR</td>
<td>
<p>Author has not previously committed to the repository.</p>
</td>
</tr>
<tr>
<td>MANNEQUIN</td>
<td>
<p>Author is a placeholder for an unclaimed user.</p>
</td>
</tr>
<tr>
<td>MEMBER</td>
<td>
<p>Author is a member of the organization that owns the repository.</p>
</td>
</tr>
<tr>
<td>NONE</td>
<td>
<p>Author has no association with the repository.</p>
</td>
</tr>
<tr>
<td>OWNER</td>
<td>
<p>Author is the owner of the repository.</p>
</td>
</tr>
</tbody>
</table>

## CommentCannotUpdateReason

The possible errors that will prevent a user from updating a comment.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>ARCHIVED</td>
<td>
<p>Unable to create comment because repository is archived.</p>
</td>
</tr>
<tr>
<td>DENIED</td>
<td>
<p>You cannot update this comment</p>
</td>
</tr>
<tr>
<td>INSUFFICIENT_ACCESS</td>
<td>
<p>You must be the author or have write access to this repository to update this comment.</p>
</td>
</tr>
<tr>
<td>LOCKED</td>
<td>
<p>Unable to create comment because issue is locked.</p>
</td>
</tr>
<tr>
<td>LOGIN_REQUIRED</td>
<td>
<p>You must be logged in to update this comment.</p>
</td>
</tr>
<tr>
<td>MAINTENANCE</td>
<td>
<p>Repository is under maintenance.</p>
</td>
</tr>
<tr>
<td>VERIFIED_EMAIL_REQUIRED</td>
<td>
<p>At least one email address must be verified to update this comment.</p>
</td>
</tr>
</tbody>
</table>

## CommitContributionOrderField

Properties by which commit contribution connections can be ordered.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>COMMIT_COUNT</td>
<td>
<p>Order commit contributions by how many commits they represent.</p>
</td>
</tr>
<tr>
<td>OCCURRED_AT</td>
<td>
<p>Order commit contributions by when they were made.</p>
</td>
</tr>
</tbody>
</table>

## ContributionLevel

Varying levels of contributions from none to many.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>FIRST_QUARTILE</td>
<td>
<p>Lowest 25% of days of contributions.</p>
</td>
</tr>
<tr>
<td>FOURTH_QUARTILE</td>
<td>
<p>Highest 25% of days of contributions. More contributions than the third quartile.</p>
</td>
</tr>
<tr>
<td>NONE</td>
<td>
<p>No contributions occurred.</p>
</td>
</tr>
<tr>
<td>SECOND_QUARTILE</td>
<td>
<p>Second lowest 25% of days of contributions. More contributions than the first quartile.</p>
</td>
</tr>
<tr>
<td>THIRD_QUARTILE</td>
<td>
<p>Second highest 25% of days of contributions. More contributions than second quartile, less than the fourth quartile.</p>
</td>
</tr>
</tbody>
</table>

## DefaultRepositoryPermissionField

The possible default permissions for repositories.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>ADMIN</td>
<td>
<p>Can read, write, and administrate repos by default</p>
</td>
</tr>
<tr>
<td>NONE</td>
<td>
<p>No access</p>
</td>
</tr>
<tr>
<td>READ</td>
<td>
<p>Can read repos by default</p>
</td>
</tr>
<tr>
<td>WRITE</td>
<td>
<p>Can read and write repos by default</p>
</td>
</tr>
</tbody>
</table>

## DeploymentOrderField

Properties by which deployment connections can be ordered.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>CREATED_AT</td>
<td>
<p>Order collection by creation time</p>
</td>
</tr>
</tbody>
</table>

## DeploymentState

The possible states in which a deployment can be.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>ABANDONED</td>
<td>
<p>The pending deployment was not updated after 30 minutes.</p>
</td>
</tr>
<tr>
<td>ACTIVE</td>
<td>
<p>The deployment is currently active.</p>
</td>
</tr>
<tr>
<td>DESTROYED</td>
<td>
<p>An inactive transient deployment.</p>
</td>
</tr>
<tr>
<td>ERROR</td>
<td>
<p>The deployment experienced an error.</p>
</td>
</tr>
<tr>
<td>FAILURE</td>
<td>
<p>The deployment has failed.</p>
</td>
</tr>
<tr>
<td>INACTIVE</td>
<td>
<p>The deployment is inactive.</p>
</td>
</tr>
<tr>
<td>IN_PROGRESS</td>
<td>
<p>The deployment is in progress.</p>
</td>
</tr>
<tr>
<td>PENDING</td>
<td>
<p>The deployment is pending.</p>
</td>
</tr>
<tr>
<td>QUEUED</td>
<td>
<p>The deployment has queued</p>
</td>
</tr>
<tr>
<td>WAITING</td>
<td>
<p>The deployment is waiting.</p>
</td>
</tr>
</tbody>
</table>

## DeploymentStatusState

The possible states for a deployment status.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>ERROR</td>
<td>
<p>The deployment experienced an error.</p>
</td>
</tr>
<tr>
<td>FAILURE</td>
<td>
<p>The deployment has failed.</p>
</td>
</tr>
<tr>
<td>INACTIVE</td>
<td>
<p>The deployment is inactive.</p>
</td>
</tr>
<tr>
<td>IN_PROGRESS</td>
<td>
<p>The deployment is in progress.</p>
</td>
</tr>
<tr>
<td>PENDING</td>
<td>
<p>The deployment is pending.</p>
</td>
</tr>
<tr>
<td>QUEUED</td>
<td>
<p>The deployment is queued</p>
</td>
</tr>
<tr>
<td>SUCCESS</td>
<td>
<p>The deployment was successful.</p>
</td>
</tr>
<tr>
<td>WAITING</td>
<td>
<p>The deployment is waiting.</p>
</td>
</tr>
</tbody>
</table>

## DiffSide

The possible sides of a diff.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>LEFT</td>
<td>
<p>The left side of the diff.</p>
</td>
</tr>
<tr>
<td>RIGHT</td>
<td>
<p>The right side of the diff.</p>
</td>
</tr>
</tbody>
</table>

## EnterpriseAdministratorInvitationOrderField

Properties by which enterprise administrator invitation connections can be ordered.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>CREATED_AT</td>
<td>
<p>Order enterprise administrator member invitations by creation time</p>
</td>
</tr>
</tbody>
</table>

## EnterpriseAdministratorRole

The possible administrator roles in an enterprise account.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>BILLING_MANAGER</td>
<td>
<p>Represents a billing manager of the enterprise account.</p>
</td>
</tr>
<tr>
<td>OWNER</td>
<td>
<p>Represents an owner of the enterprise account.</p>
</td>
</tr>
</tbody>
</table>

## EnterpriseDefaultRepositoryPermissionSettingValue

The possible values for the enterprise default repository permission setting.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>ADMIN</td>
<td>
<p>Organization members will be able to clone, pull, push, and add new collaborators to all organization repositories.</p>
</td>
</tr>
<tr>
<td>NONE</td>
<td>
<p>Organization members will only be able to clone and pull public repositories.</p>
</td>
</tr>
<tr>
<td>NO_POLICY</td>
<td>
<p>Organizations in the enterprise choose default repository permissions for their members.</p>
</td>
</tr>
<tr>
<td>READ</td>
<td>
<p>Organization members will be able to clone and pull all organization repositories.</p>
</td>
</tr>
<tr>
<td>WRITE</td>
<td>
<p>Organization members will be able to clone, pull, and push all organization repositories.</p>
</td>
</tr>
</tbody>
</table>

## EnterpriseEnabledDisabledSettingValue

The possible values for an enabled/disabled enterprise setting.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>DISABLED</td>
<td>
<p>The setting is disabled for organizations in the enterprise.</p>
</td>
</tr>
<tr>
<td>ENABLED</td>
<td>
<p>The setting is enabled for organizations in the enterprise.</p>
</td>
</tr>
<tr>
<td>NO_POLICY</td>
<td>
<p>There is no policy set for organizations in the enterprise.</p>
</td>
</tr>
</tbody>
</table>

## EnterpriseEnabledSettingValue

The possible values for an enabled/no policy enterprise setting.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>ENABLED</td>
<td>
<p>The setting is enabled for organizations in the enterprise.</p>
</td>
</tr>
<tr>
<td>NO_POLICY</td>
<td>
<p>There is no policy set for organizations in the enterprise.</p>
</td>
</tr>
</tbody>
</table>

## EnterpriseMemberOrderField

Properties by which enterprise member connections can be ordered.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>CREATED_AT</td>
<td>
<p>Order enterprise members by creation time</p>
</td>
</tr>
<tr>
<td>LOGIN</td>
<td>
<p>Order enterprise members by login</p>
</td>
</tr>
</tbody>
</table>

## EnterpriseMembersCanCreateRepositoriesSettingValue

The possible values for the enterprise members can create repositories setting.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>ALL</td>
<td>
<p>Members will be able to create public and private repositories.</p>
</td>
</tr>
<tr>
<td>DISABLED</td>
<td>
<p>Members will not be able to create public or private repositories.</p>
</td>
</tr>
<tr>
<td>NO_POLICY</td>
<td>
<p>Organization administrators choose whether to allow members to create repositories.</p>
</td>
</tr>
<tr>
<td>PRIVATE</td>
<td>
<p>Members will be able to create only private repositories.</p>
</td>
</tr>
<tr>
<td>PUBLIC</td>
<td>
<p>Members will be able to create only public repositories.</p>
</td>
</tr>
</tbody>
</table>

## EnterpriseMembersCanMakePurchasesSettingValue

The possible values for the members can make purchases setting.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>DISABLED</td>
<td>
<p>The setting is disabled for organizations in the enterprise.</p>
</td>
</tr>
<tr>
<td>ENABLED</td>
<td>
<p>The setting is enabled for organizations in the enterprise.</p>
</td>
</tr>
</tbody>
</table>

## EnterpriseServerInstallationOrderField

Properties by which Enterprise Server installation connections can be ordered.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>CREATED_AT</td>
<td>
<p>Order Enterprise Server installations by creation time</p>
</td>
</tr>
<tr>
<td>CUSTOMER_NAME</td>
<td>
<p>Order Enterprise Server installations by customer name</p>
</td>
</tr>
<tr>
<td>HOST_NAME</td>
<td>
<p>Order Enterprise Server installations by host name</p>
</td>
</tr>
</tbody>
</table>

## EnterpriseServerUserAccountEmailOrderField

Properties by which Enterprise Server user account email connections can be ordered.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>EMAIL</td>
<td>
<p>Order emails by email</p>
</td>
</tr>
</tbody>
</table>

## EnterpriseServerUserAccountOrderField

Properties by which Enterprise Server user account connections can be ordered.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>LOGIN</td>
<td>
<p>Order user accounts by login</p>
</td>
</tr>
<tr>
<td>REMOTE_CREATED_AT</td>
<td>
<p>Order user accounts by creation time on the Enterprise Server installation</p>
</td>
</tr>
</tbody>
</table>

## EnterpriseServerUserAccountsUploadOrderField

Properties by which Enterprise Server user accounts upload connections can be ordered.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>CREATED_AT</td>
<td>
<p>Order user accounts uploads by creation time</p>
</td>
</tr>
</tbody>
</table>

## EnterpriseServerUserAccountsUploadSyncState

Synchronization state of the Enterprise Server user accounts upload

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>FAILURE</td>
<td>
<p>The synchronization of the upload failed.</p>
</td>
</tr>
<tr>
<td>PENDING</td>
<td>
<p>The synchronization of the upload is pending.</p>
</td>
</tr>
<tr>
<td>SUCCESS</td>
<td>
<p>The synchronization of the upload succeeded.</p>
</td>
</tr>
</tbody>
</table>

## EnterpriseUserAccountMembershipRole

The possible roles for enterprise membership.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>MEMBER</td>
<td>
<p>The user is a member of the enterprise membership.</p>
</td>
</tr>
<tr>
<td>OWNER</td>
<td>
<p>The user is an owner of the enterprise membership.</p>
</td>
</tr>
</tbody>
</table>

## EnterpriseUserDeployment

The possible GitHub Enterprise deployments where this user can exist.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>CLOUD</td>
<td>
<p>The user is part of a GitHub Enterprise Cloud deployment.</p>
</td>
</tr>
<tr>
<td>SERVER</td>
<td>
<p>The user is part of a GitHub Enterprise Server deployment.</p>
</td>
</tr>
</tbody>
</table>

## FileViewedState

The possible viewed states of a file .

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>DISMISSED</td>
<td>
<p>The file has new changes since last viewed.</p>
</td>
</tr>
<tr>
<td>UNVIEWED</td>
<td>
<p>The file has not been marked as viewed.</p>
</td>
</tr>
<tr>
<td>VIEWED</td>
<td>
<p>The file has been marked as viewed.</p>
</td>
</tr>
</tbody>
</table>

## FundingPlatform

The possible funding platforms for repository funding links.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>COMMUNITY_BRIDGE</td>
<td>
<p>Community Bridge funding platform.</p>
</td>
</tr>
<tr>
<td>CUSTOM</td>
<td>
<p>Custom funding platform.</p>
</td>
</tr>
<tr>
<td>GITHUB</td>
<td>
<p>GitHub funding platform.</p>
</td>
</tr>
<tr>
<td>ISSUEHUNT</td>
<td>
<p>IssueHunt funding platform.</p>
</td>
</tr>
<tr>
<td>KO_FI</td>
<td>
<p>Ko-fi funding platform.</p>
</td>
</tr>
<tr>
<td>LIBERAPAY</td>
<td>
<p>Liberapay funding platform.</p>
</td>
</tr>
<tr>
<td>OPEN_COLLECTIVE</td>
<td>
<p>Open Collective funding platform.</p>
</td>
</tr>
<tr>
<td>OTECHIE</td>
<td>
<p>Otechie funding platform.</p>
</td>
</tr>
<tr>
<td>PATREON</td>
<td>
<p>Patreon funding platform.</p>
</td>
</tr>
<tr>
<td>TIDELIFT</td>
<td>
<p>Tidelift funding platform.</p>
</td>
</tr>
</tbody>
</table>

## GistOrderField

Properties by which gist connections can be ordered.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>CREATED_AT</td>
<td>
<p>Order gists by creation time</p>
</td>
</tr>
<tr>
<td>PUSHED_AT</td>
<td>
<p>Order gists by push time</p>
</td>
</tr>
<tr>
<td>UPDATED_AT</td>
<td>
<p>Order gists by update time</p>
</td>
</tr>
</tbody>
</table>

## GistPrivacy

The privacy of a Gist

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>ALL</td>
<td>
<p>Gists that are public and secret</p>
</td>
</tr>
<tr>
<td>PUBLIC</td>
<td>
<p>Public</p>
</td>
</tr>
<tr>
<td>SECRET</td>
<td>
<p>Secret</p>
</td>
</tr>
</tbody>
</table>

## GitSignatureState

The state of a Git signature.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>BAD_CERT</td>
<td>
<p>The signing certificate or its chain could not be verified</p>
</td>
</tr>
<tr>
<td>BAD_EMAIL</td>
<td>
<p>Invalid email used for signing</p>
</td>
</tr>
<tr>
<td>EXPIRED_KEY</td>
<td>
<p>Signing key expired</p>
</td>
</tr>
<tr>
<td>GPGVERIFY_ERROR</td>
<td>
<p>Internal error - the GPG verification service misbehaved</p>
</td>
</tr>
<tr>
<td>GPGVERIFY_UNAVAILABLE</td>
<td>
<p>Internal error - the GPG verification service is unavailable at the moment</p>
</td>
</tr>
<tr>
<td>INVALID</td>
<td>
<p>Invalid signature</p>
</td>
</tr>
<tr>
<td>MALFORMED_SIG</td>
<td>
<p>Malformed signature</p>
</td>
</tr>
<tr>
<td>NOT_SIGNING_KEY</td>
<td>
<p>The usage flags for the key that signed this don&#39;t allow signing</p>
</td>
</tr>
<tr>
<td>NO_USER</td>
<td>
<p>Email used for signing not known to GitHub</p>
</td>
</tr>
<tr>
<td>OCSP_ERROR</td>
<td>
<p>Valid signature, though certificate revocation check failed</p>
</td>
</tr>
<tr>
<td>OCSP_PENDING</td>
<td>
<p>Valid signature, pending certificate revocation checking</p>
</td>
</tr>
<tr>
<td>OCSP_REVOKED</td>
<td>
<p>One or more certificates in chain has been revoked</p>
</td>
</tr>
<tr>
<td>UNKNOWN_KEY</td>
<td>
<p>Key used for signing not known to GitHub</p>
</td>
</tr>
<tr>
<td>UNKNOWN_SIG_TYPE</td>
<td>
<p>Unknown signature type</p>
</td>
</tr>
<tr>
<td>UNSIGNED</td>
<td>
<p>Unsigned</p>
</td>
</tr>
<tr>
<td>UNVERIFIED_EMAIL</td>
<td>
<p>Email used for signing unverified on GitHub</p>
</td>
</tr>
<tr>
<td>VALID</td>
<td>
<p>Valid signature and verified by GitHub</p>
</td>
</tr>
</tbody>
</table>

## IdentityProviderConfigurationState

The possible states in which authentication can be configured with an identity provider.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>CONFIGURED</td>
<td>
<p>Authentication with an identity provider is configured but not enforced.</p>
</td>
</tr>
<tr>
<td>ENFORCED</td>
<td>
<p>Authentication with an identity provider is configured and enforced.</p>
</td>
</tr>
<tr>
<td>UNCONFIGURED</td>
<td>
<p>Authentication with an identity provider is not configured.</p>
</td>
</tr>
</tbody>
</table>

## IpAllowListEnabledSettingValue

The possible values for the IP allow list enabled setting.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>DISABLED</td>
<td>
<p>The setting is disabled for the owner.</p>
</td>
</tr>
<tr>
<td>ENABLED</td>
<td>
<p>The setting is enabled for the owner.</p>
</td>
</tr>
</tbody>
</table>

## IpAllowListEntryOrderField

Properties by which IP allow list entry connections can be ordered.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>ALLOW_LIST_VALUE</td>
<td>
<p>Order IP allow list entries by the allow list value.</p>
</td>
</tr>
<tr>
<td>CREATED_AT</td>
<td>
<p>Order IP allow list entries by creation time.</p>
</td>
</tr>
</tbody>
</table>

## IssueCommentOrderField

Properties by which issue comment connections can be ordered.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>UPDATED_AT</td>
<td>
<p>Order issue comments by update time</p>
</td>
</tr>
</tbody>
</table>

## IssueOrderField

Properties by which issue connections can be ordered.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>COMMENTS</td>
<td>
<p>Order issues by comment count</p>
</td>
</tr>
<tr>
<td>CREATED_AT</td>
<td>
<p>Order issues by creation time</p>
</td>
</tr>
<tr>
<td>UPDATED_AT</td>
<td>
<p>Order issues by update time</p>
</td>
</tr>
</tbody>
</table>

## IssueState

The possible states of an issue.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>CLOSED</td>
<td>
<p>An issue that has been closed</p>
</td>
</tr>
<tr>
<td>OPEN</td>
<td>
<p>An issue that is still open</p>
</td>
</tr>
</tbody>
</table>

## IssueTimelineItemsItemType

The possible item types found in a timeline.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>ADDED_TO_PROJECT_EVENT</td>
<td>
<p>Represents a &#39;added_to_project&#39; event on a given issue or pull request.</p>
</td>
</tr>
<tr>
<td>ASSIGNED_EVENT</td>
<td>
<p>Represents an &#39;assigned&#39; event on any assignable object.</p>
</td>
</tr>
<tr>
<td>CLOSED_EVENT</td>
<td>
<p>Represents a &#39;closed&#39; event on any <code>Closable</code>.</p>
</td>
</tr>
<tr>
<td>COMMENT_DELETED_EVENT</td>
<td>
<p>Represents a &#39;comment_deleted&#39; event on a given issue or pull request.</p>
</td>
</tr>
<tr>
<td>CONNECTED_EVENT</td>
<td>
<p>Represents a &#39;connected&#39; event on a given issue or pull request.</p>
</td>
</tr>
<tr>
<td>CONVERTED_NOTE_TO_ISSUE_EVENT</td>
<td>
<p>Represents a &#39;converted_note_to_issue&#39; event on a given issue or pull request.</p>
</td>
</tr>
<tr>
<td>CROSS_REFERENCED_EVENT</td>
<td>
<p>Represents a mention made by one issue or pull request to another.</p>
</td>
</tr>
<tr>
<td>DEMILESTONED_EVENT</td>
<td>
<p>Represents a &#39;demilestoned&#39; event on a given issue or pull request.</p>
</td>
</tr>
<tr>
<td>DISCONNECTED_EVENT</td>
<td>
<p>Represents a &#39;disconnected&#39; event on a given issue or pull request.</p>
</td>
</tr>
<tr>
<td>ISSUE_COMMENT</td>
<td>
<p>Represents a comment on an Issue.</p>
</td>
</tr>
<tr>
<td>LABELED_EVENT</td>
<td>
<p>Represents a &#39;labeled&#39; event on a given issue or pull request.</p>
</td>
</tr>
<tr>
<td>LOCKED_EVENT</td>
<td>
<p>Represents a &#39;locked&#39; event on a given issue or pull request.</p>
</td>
</tr>
<tr>
<td>MARKED_AS_DUPLICATE_EVENT</td>
<td>
<p>Represents a &#39;marked_as_duplicate&#39; event on a given issue or pull request.</p>
</td>
</tr>
<tr>
<td>MENTIONED_EVENT</td>
<td>
<p>Represents a &#39;mentioned&#39; event on a given issue or pull request.</p>
</td>
</tr>
<tr>
<td>MILESTONED_EVENT</td>
<td>
<p>Represents a &#39;milestoned&#39; event on a given issue or pull request.</p>
</td>
</tr>
<tr>
<td>MOVED_COLUMNS_IN_PROJECT_EVENT</td>
<td>
<p>Represents a &#39;moved_columns_in_project&#39; event on a given issue or pull request.</p>
</td>
</tr>
<tr>
<td>PINNED_EVENT</td>
<td>
<p>Represents a &#39;pinned&#39; event on a given issue or pull request.</p>
</td>
</tr>
<tr>
<td>REFERENCED_EVENT</td>
<td>
<p>Represents a &#39;referenced&#39; event on a given <code>ReferencedSubject</code>.</p>
</td>
</tr>
<tr>
<td>REMOVED_FROM_PROJECT_EVENT</td>
<td>
<p>Represents a &#39;removed_from_project&#39; event on a given issue or pull request.</p>
</td>
</tr>
<tr>
<td>RENAMED_TITLE_EVENT</td>
<td>
<p>Represents a &#39;renamed&#39; event on a given issue or pull request</p>
</td>
</tr>
<tr>
<td>REOPENED_EVENT</td>
<td>
<p>Represents a &#39;reopened&#39; event on any <code>Closable</code>.</p>
</td>
</tr>
<tr>
<td>SUBSCRIBED_EVENT</td>
<td>
<p>Represents a &#39;subscribed&#39; event on a given <code>Subscribable</code>.</p>
</td>
</tr>
<tr>
<td>TRANSFERRED_EVENT</td>
<td>
<p>Represents a &#39;transferred&#39; event on a given issue or pull request.</p>
</td>
</tr>
<tr>
<td>UNASSIGNED_EVENT</td>
<td>
<p>Represents an &#39;unassigned&#39; event on any assignable object.</p>
</td>
</tr>
<tr>
<td>UNLABELED_EVENT</td>
<td>
<p>Represents an &#39;unlabeled&#39; event on a given issue or pull request.</p>
</td>
</tr>
<tr>
<td>UNLOCKED_EVENT</td>
<td>
<p>Represents an &#39;unlocked&#39; event on a given issue or pull request.</p>
</td>
</tr>
<tr>
<td>UNMARKED_AS_DUPLICATE_EVENT</td>
<td>
<p>Represents an &#39;unmarked_as_duplicate&#39; event on a given issue or pull request.</p>
</td>
</tr>
<tr>
<td>UNPINNED_EVENT</td>
<td>
<p>Represents an &#39;unpinned&#39; event on a given issue or pull request.</p>
</td>
</tr>
<tr>
<td>UNSUBSCRIBED_EVENT</td>
<td>
<p>Represents an &#39;unsubscribed&#39; event on a given <code>Subscribable</code>.</p>
</td>
</tr>
<tr>
<td>USER_BLOCKED_EVENT</td>
<td>
<p>Represents a &#39;user_blocked&#39; event on a given user.</p>
</td>
</tr>
</tbody>
</table>

## LabelOrderField

Properties by which label connections can be ordered.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>CREATED_AT</td>
<td>
<p>Order labels by creation time</p>
</td>
</tr>
<tr>
<td>NAME</td>
<td>
<p>Order labels by name</p>
</td>
</tr>
</tbody>
</table>

## LanguageOrderField

Properties by which language connections can be ordered.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>SIZE</td>
<td>
<p>Order languages by the size of all files containing the language</p>
</td>
</tr>
</tbody>
</table>

## LockReason

The possible reasons that an issue or pull request was locked.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>OFF_TOPIC</td>
<td>
<p>The issue or pull request was locked because the conversation was off-topic.</p>
</td>
</tr>
<tr>
<td>RESOLVED</td>
<td>
<p>The issue or pull request was locked because the conversation was resolved.</p>
</td>
</tr>
<tr>
<td>SPAM</td>
<td>
<p>The issue or pull request was locked because the conversation was spam.</p>
</td>
</tr>
<tr>
<td>TOO_HEATED</td>
<td>
<p>The issue or pull request was locked because the conversation was too heated.</p>
</td>
</tr>
</tbody>
</table>

## MergeableState

Whether or not a PullRequest can be merged.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>CONFLICTING</td>
<td>
<p>The pull request cannot be merged due to merge conflicts.</p>
</td>
</tr>
<tr>
<td>MERGEABLE</td>
<td>
<p>The pull request can be merged.</p>
</td>
</tr>
<tr>
<td>UNKNOWN</td>
<td>
<p>The mergeability of the pull request is still being calculated.</p>
</td>
</tr>
</tbody>
</table>

## MergeStateStatus

Detailed status information about a pull request merge.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>BEHIND</td>
<td>
<p>The head ref is out of date.</p>
</td>
</tr>
<tr>
<td>BLOCKED</td>
<td>
<p>The merge is blocked.</p>
</td>
</tr>
<tr>
<td>CLEAN</td>
<td>
<p>Mergeable and passing commit status.</p>
</td>
</tr>
<tr>
<td>DIRTY</td>
<td>
<p>The merge commit cannot be cleanly created.</p>
</td>
</tr>
<tr>
<td>DRAFT</td>
<td>
<p>The merge is blocked due to the pull request being a draft.</p>
</td>
</tr>
<tr>
<td>HAS_HOOKS</td>
<td>
<p>Mergeable with passing commit status and pre-receive hooks.</p>
</td>
</tr>
<tr>
<td>UNKNOWN</td>
<td>
<p>The state cannot currently be determined.</p>
</td>
</tr>
<tr>
<td>UNSTABLE</td>
<td>
<p>Mergeable with non-passing commit status.</p>
</td>
</tr>
</tbody>
</table>

## MilestoneOrderField

Properties by which milestone connections can be ordered.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>CREATED_AT</td>
<td>
<p>Order milestones by when they were created.</p>
</td>
</tr>
<tr>
<td>DUE_DATE</td>
<td>
<p>Order milestones by when they are due.</p>
</td>
</tr>
<tr>
<td>NUMBER</td>
<td>
<p>Order milestones by their number.</p>
</td>
</tr>
<tr>
<td>UPDATED_AT</td>
<td>
<p>Order milestones by when they were last updated.</p>
</td>
</tr>
</tbody>
</table>

## MilestoneState

The possible states of a milestone.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>CLOSED</td>
<td>
<p>A milestone that has been closed.</p>
</td>
</tr>
<tr>
<td>OPEN</td>
<td>
<p>A milestone that is still open.</p>
</td>
</tr>
</tbody>
</table>

## NotificationRestrictionSettingValue

The possible values for the notification restriction setting.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>DISABLED</td>
<td>
<p>The setting is disabled for the owner.</p>
</td>
</tr>
<tr>
<td>ENABLED</td>
<td>
<p>The setting is enabled for the owner.</p>
</td>
</tr>
</tbody>
</table>

## OauthApplicationCreateAuditEntryState

The state of an OAuth Application when it was created.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>ACTIVE</td>
<td>
<p>The OAuth Application was active and allowed to have OAuth Accesses.</p>
</td>
</tr>
<tr>
<td>PENDING_DELETION</td>
<td>
<p>The OAuth Application was in the process of being deleted.</p>
</td>
</tr>
<tr>
<td>SUSPENDED</td>
<td>
<p>The OAuth Application was suspended from generating OAuth Accesses due to abuse or security concerns.</p>
</td>
</tr>
</tbody>
</table>

## OperationType

The corresponding operation type for the action

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>ACCESS</td>
<td>
<p>An existing resource was accessed</p>
</td>
</tr>
<tr>
<td>AUTHENTICATION</td>
<td>
<p>A resource performed an authentication event</p>
</td>
</tr>
<tr>
<td>CREATE</td>
<td>
<p>A new resource was created</p>
</td>
</tr>
<tr>
<td>MODIFY</td>
<td>
<p>An existing resource was modified</p>
</td>
</tr>
<tr>
<td>REMOVE</td>
<td>
<p>An existing resource was removed</p>
</td>
</tr>
<tr>
<td>RESTORE</td>
<td>
<p>An existing resource was restored</p>
</td>
</tr>
<tr>
<td>TRANSFER</td>
<td>
<p>An existing resource was transferred between multiple resources</p>
</td>
</tr>
</tbody>
</table>

## OrderDirection

Possible directions in which to order a list of items when provided an `orderBy` argument.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>ASC</td>
<td>
<p>Specifies an ascending order for a given <code>orderBy</code> argument.</p>
</td>
</tr>
<tr>
<td>DESC</td>
<td>
<p>Specifies a descending order for a given <code>orderBy</code> argument.</p>
</td>
</tr>
</tbody>
</table>

## OrgAddMemberAuditEntryPermission

The permissions available to members on an Organization.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>ADMIN</td>
<td>
<p>Can read, clone, push, and add collaborators to repositories.</p>
</td>
</tr>
<tr>
<td>READ</td>
<td>
<p>Can read and clone repositories.</p>
</td>
</tr>
</tbody>
</table>

## OrganizationInvitationRole

The possible organization invitation roles.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>ADMIN</td>
<td>
<p>The user is invited to be an admin of the organization.</p>
</td>
</tr>
<tr>
<td>BILLING_MANAGER</td>
<td>
<p>The user is invited to be a billing manager of the organization.</p>
</td>
</tr>
<tr>
<td>DIRECT_MEMBER</td>
<td>
<p>The user is invited to be a direct member of the organization.</p>
</td>
</tr>
<tr>
<td>REINSTATE</td>
<td>
<p>The user&#39;s previous role will be reinstated.</p>
</td>
</tr>
</tbody>
</table>

## OrganizationInvitationType

The possible organization invitation types.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>EMAIL</td>
<td>
<p>The invitation was to an email address.</p>
</td>
</tr>
<tr>
<td>USER</td>
<td>
<p>The invitation was to an existing user.</p>
</td>
</tr>
</tbody>
</table>

## OrganizationMemberRole

The possible roles within an organization for its members.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>ADMIN</td>
<td>
<p>The user is an administrator of the organization.</p>
</td>
</tr>
<tr>
<td>MEMBER</td>
<td>
<p>The user is a member of the organization.</p>
</td>
</tr>
</tbody>
</table>

## OrganizationMembersCanCreateRepositoriesSettingValue

The possible values for the members can create repositories setting on an organization.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>ALL</td>
<td>
<p>Members will be able to create public and private repositories.</p>
</td>
</tr>
<tr>
<td>DISABLED</td>
<td>
<p>Members will not be able to create public or private repositories.</p>
</td>
</tr>
<tr>
<td>PRIVATE</td>
<td>
<p>Members will be able to create only private repositories.</p>
</td>
</tr>
</tbody>
</table>

## OrganizationOrderField

Properties by which organization connections can be ordered.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>CREATED_AT</td>
<td>
<p>Order organizations by creation time</p>
</td>
</tr>
<tr>
<td>LOGIN</td>
<td>
<p>Order organizations by login</p>
</td>
</tr>
</tbody>
</table>

## OrgCreateAuditEntryBillingPlan

The billing plans available for organizations.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>BUSINESS</td>
<td>
<p>Team Plan</p>
</td>
</tr>
<tr>
<td>BUSINESS_PLUS</td>
<td>
<p>Enterprise Cloud Plan</p>
</td>
</tr>
<tr>
<td>FREE</td>
<td>
<p>Free Plan</p>
</td>
</tr>
<tr>
<td>TIERED_PER_SEAT</td>
<td>
<p>Tiered Per Seat Plan</p>
</td>
</tr>
<tr>
<td>UNLIMITED</td>
<td>
<p>Legacy Unlimited Plan</p>
</td>
</tr>
</tbody>
</table>

## OrgRemoveBillingManagerAuditEntryReason

The reason a billing manager was removed from an Organization.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>SAML_EXTERNAL_IDENTITY_MISSING</td>
<td>
<p>SAML external identity missing</p>
</td>
</tr>
<tr>
<td>SAML_SSO_ENFORCEMENT_REQUIRES_EXTERNAL_IDENTITY</td>
<td>
<p>SAML SSO enforcement requires an external identity</p>
</td>
</tr>
<tr>
<td>TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE</td>
<td>
<p>The organization required 2FA of its billing managers and this user did not have 2FA enabled.</p>
</td>
</tr>
</tbody>
</table>

## OrgRemoveMemberAuditEntryMembershipType

The type of membership a user has with an Organization.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>ADMIN</td>
<td>
<p>Organization administrators have full access and can change several settings,
including the names of repositories that belong to the Organization and Owners
team membership. In addition, organization admins can delete the organization
and all of its repositories.</p>
</td>
</tr>
<tr>
<td>BILLING_MANAGER</td>
<td>
<p>A billing manager is a user who manages the billing settings for the Organization, such as updating payment information.</p>
</td>
</tr>
<tr>
<td>DIRECT_MEMBER</td>
<td>
<p>A direct member is a user that is a member of the Organization.</p>
</td>
</tr>
<tr>
<td>OUTSIDE_COLLABORATOR</td>
<td>
<p>An outside collaborator is a person who isn&#39;t explicitly a member of the
Organization, but who has Read, Write, or Admin permissions to one or more
repositories in the organization.</p>
</td>
</tr>
<tr>
<td>UNAFFILIATED</td>
<td>
<p>An unaffiliated collaborator is a person who is not a member of the
Organization and does not have access to any repositories in the Organization.</p>
</td>
</tr>
</tbody>
</table>

## OrgRemoveMemberAuditEntryReason

The reason a member was removed from an Organization.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>SAML_EXTERNAL_IDENTITY_MISSING</td>
<td>
<p>SAML external identity missing</p>
</td>
</tr>
<tr>
<td>SAML_SSO_ENFORCEMENT_REQUIRES_EXTERNAL_IDENTITY</td>
<td>
<p>SAML SSO enforcement requires an external identity</p>
</td>
</tr>
<tr>
<td>TWO_FACTOR_ACCOUNT_RECOVERY</td>
<td>
<p>User was removed from organization during account recovery</p>
</td>
</tr>
<tr>
<td>TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE</td>
<td>
<p>The organization required 2FA of its billing managers and this user did not have 2FA enabled.</p>
</td>
</tr>
<tr>
<td>USER_ACCOUNT_DELETED</td>
<td>
<p>User account has been deleted</p>
</td>
</tr>
</tbody>
</table>

## OrgRemoveOutsideCollaboratorAuditEntryMembershipType

The type of membership a user has with an Organization.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>BILLING_MANAGER</td>
<td>
<p>A billing manager is a user who manages the billing settings for the Organization, such as updating payment information.</p>
</td>
</tr>
<tr>
<td>OUTSIDE_COLLABORATOR</td>
<td>
<p>An outside collaborator is a person who isn&#39;t explicitly a member of the
Organization, but who has Read, Write, or Admin permissions to one or more
repositories in the organization.</p>
</td>
</tr>
<tr>
<td>UNAFFILIATED</td>
<td>
<p>An unaffiliated collaborator is a person who is not a member of the
Organization and does not have access to any repositories in the organization.</p>
</td>
</tr>
</tbody>
</table>

## OrgRemoveOutsideCollaboratorAuditEntryReason

The reason an outside collaborator was removed from an Organization.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>SAML_EXTERNAL_IDENTITY_MISSING</td>
<td>
<p>SAML external identity missing</p>
</td>
</tr>
<tr>
<td>TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE</td>
<td>
<p>The organization required 2FA of its billing managers and this user did not have 2FA enabled.</p>
</td>
</tr>
</tbody>
</table>

## OrgUpdateDefaultRepositoryPermissionAuditEntryPermission

The default permission a repository can have in an Organization.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>ADMIN</td>
<td>
<p>Can read, clone, push, and add collaborators to repositories.</p>
</td>
</tr>
<tr>
<td>NONE</td>
<td>
<p>No default permission value.</p>
</td>
</tr>
<tr>
<td>READ</td>
<td>
<p>Can read and clone repositories.</p>
</td>
</tr>
<tr>
<td>WRITE</td>
<td>
<p>Can read, clone and push to repositories.</p>
</td>
</tr>
</tbody>
</table>

## OrgUpdateMemberAuditEntryPermission

The permissions available to members on an Organization.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>ADMIN</td>
<td>
<p>Can read, clone, push, and add collaborators to repositories.</p>
</td>
</tr>
<tr>
<td>READ</td>
<td>
<p>Can read and clone repositories.</p>
</td>
</tr>
</tbody>
</table>

## OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility

The permissions available for repository creation on an Organization.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>ALL</td>
<td>
<p>All organization members are restricted from creating any repositories.</p>
</td>
</tr>
<tr>
<td>INTERNAL</td>
<td>
<p>All organization members are restricted from creating internal repositories.</p>
</td>
</tr>
<tr>
<td>NONE</td>
<td>
<p>All organization members are allowed to create any repositories.</p>
</td>
</tr>
<tr>
<td>PRIVATE</td>
<td>
<p>All organization members are restricted from creating private repositories.</p>
</td>
</tr>
<tr>
<td>PRIVATE_INTERNAL</td>
<td>
<p>All organization members are restricted from creating private or internal repositories.</p>
</td>
</tr>
<tr>
<td>PUBLIC</td>
<td>
<p>All organization members are restricted from creating public repositories.</p>
</td>
</tr>
<tr>
<td>PUBLIC_INTERNAL</td>
<td>
<p>All organization members are restricted from creating public or internal repositories.</p>
</td>
</tr>
<tr>
<td>PUBLIC_PRIVATE</td>
<td>
<p>All organization members are restricted from creating public or private repositories.</p>
</td>
</tr>
</tbody>
</table>

## PackageFileOrderField

Properties by which package file connections can be ordered.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>CREATED_AT</td>
<td>
<p>Order package files by creation time</p>
</td>
</tr>
</tbody>
</table>

## PackageOrderField

Properties by which package connections can be ordered.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>CREATED_AT</td>
<td>
<p>Order packages by creation time</p>
</td>
</tr>
</tbody>
</table>

## PackageType

The possible types of a package.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>DEBIAN</td>
<td>
<p>A debian package.</p>
</td>
</tr>
<tr>
<td>DOCKER</td>
<td>
<p>A docker image.</p>
</td>
</tr>
<tr>
<td>MAVEN</td>
<td>
<p>A maven package.</p>
</td>
</tr>
<tr>
<td>NPM</td>
<td>
<p>An npm package.</p>
</td>
</tr>
<tr>
<td>NUGET</td>
<td>
<p>A nuget package.</p>
</td>
</tr>
<tr>
<td>PYPI</td>
<td>
<p>A python package.</p>
</td>
</tr>
<tr>
<td>RUBYGEMS</td>
<td>
<p>A rubygems package.</p>
</td>
</tr>
</tbody>
</table>

## PackageVersionOrderField

Properties by which package version connections can be ordered.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>CREATED_AT</td>
<td>
<p>Order package versions by creation time</p>
</td>
</tr>
</tbody>
</table>

## PinnableItemType

Represents items that can be pinned to a profile page or dashboard.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>GIST</td>
<td>
<p>A gist.</p>
</td>
</tr>
<tr>
<td>ISSUE</td>
<td>
<p>An issue.</p>
</td>
</tr>
<tr>
<td>ORGANIZATION</td>
<td>
<p>An organization.</p>
</td>
</tr>
<tr>
<td>PROJECT</td>
<td>
<p>A project.</p>
</td>
</tr>
<tr>
<td>PULL_REQUEST</td>
<td>
<p>A pull request.</p>
</td>
</tr>
<tr>
<td>REPOSITORY</td>
<td>
<p>A repository.</p>
</td>
</tr>
<tr>
<td>TEAM</td>
<td>
<p>A team.</p>
</td>
</tr>
<tr>
<td>USER</td>
<td>
<p>A user.</p>
</td>
</tr>
</tbody>
</table>

## ProjectCardArchivedState

The possible archived states of a project card.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>ARCHIVED</td>
<td>
<p>A project card that is archived</p>
</td>
</tr>
<tr>
<td>NOT_ARCHIVED</td>
<td>
<p>A project card that is not archived</p>
</td>
</tr>
</tbody>
</table>

## ProjectCardState

Various content states of a ProjectCard

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>CONTENT_ONLY</td>
<td>
<p>The card has content only.</p>
</td>
</tr>
<tr>
<td>NOTE_ONLY</td>
<td>
<p>The card has a note only.</p>
</td>
</tr>
<tr>
<td>REDACTED</td>
<td>
<p>The card is redacted.</p>
</td>
</tr>
</tbody>
</table>

## ProjectColumnPurpose

The semantic purpose of the column - todo, in progress, or done.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>DONE</td>
<td>
<p>The column contains cards which are complete</p>
</td>
</tr>
<tr>
<td>IN_PROGRESS</td>
<td>
<p>The column contains cards which are currently being worked on</p>
</td>
</tr>
<tr>
<td>TODO</td>
<td>
<p>The column contains cards still to be worked on</p>
</td>
</tr>
</tbody>
</table>

## ProjectOrderField

Properties by which project connections can be ordered.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>CREATED_AT</td>
<td>
<p>Order projects by creation time</p>
</td>
</tr>
<tr>
<td>NAME</td>
<td>
<p>Order projects by name</p>
</td>
</tr>
<tr>
<td>UPDATED_AT</td>
<td>
<p>Order projects by update time</p>
</td>
</tr>
</tbody>
</table>

## ProjectState

State of the project; either 'open' or 'closed'

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>CLOSED</td>
<td>
<p>The project is closed.</p>
</td>
</tr>
<tr>
<td>OPEN</td>
<td>
<p>The project is open.</p>
</td>
</tr>
</tbody>
</table>

## ProjectTemplate

GitHub-provided templates for Projects

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>AUTOMATED_KANBAN_V2</td>
<td>
<p>Create a board with v2 triggers to automatically move cards across To do, In progress and Done columns.</p>
</td>
</tr>
<tr>
<td>AUTOMATED_REVIEWS_KANBAN</td>
<td>
<p>Create a board with triggers to automatically move cards across columns with review automation.</p>
</td>
</tr>
<tr>
<td>BASIC_KANBAN</td>
<td>
<p>Create a board with columns for To do, In progress and Done.</p>
</td>
</tr>
<tr>
<td>BUG_TRIAGE</td>
<td>
<p>Create a board to triage and prioritize bugs with To do, priority, and Done columns.</p>
</td>
</tr>
</tbody>
</table>

## PullRequestMergeMethod

Represents available types of methods to use when merging a pull request.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>MERGE</td>
<td>
<p>Add all commits from the head branch to the base branch with a merge commit.</p>
</td>
</tr>
<tr>
<td>REBASE</td>
<td>
<p>Add all commits from the head branch onto the base branch individually.</p>
</td>
</tr>
<tr>
<td>SQUASH</td>
<td>
<p>Combine all commits from the head branch into a single commit in the base branch.</p>
</td>
</tr>
</tbody>
</table>

## PullRequestOrderField

Properties by which pull_requests connections can be ordered.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>CREATED_AT</td>
<td>
<p>Order pull_requests by creation time</p>
</td>
</tr>
<tr>
<td>UPDATED_AT</td>
<td>
<p>Order pull_requests by update time</p>
</td>
</tr>
</tbody>
</table>

## PullRequestReviewCommentState

The possible states of a pull request review comment.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>PENDING</td>
<td>
<p>A comment that is part of a pending review</p>
</td>
</tr>
<tr>
<td>SUBMITTED</td>
<td>
<p>A comment that is part of a submitted review</p>
</td>
</tr>
</tbody>
</table>

## PullRequestReviewDecision

The review status of a pull request.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>APPROVED</td>
<td>
<p>The pull request has received an approving review.</p>
</td>
</tr>
<tr>
<td>CHANGES_REQUESTED</td>
<td>
<p>Changes have been requested on the pull request.</p>
</td>
</tr>
<tr>
<td>REVIEW_REQUIRED</td>
<td>
<p>A review is required before the pull request can be merged.</p>
</td>
</tr>
</tbody>
</table>

## PullRequestReviewEvent

The possible events to perform on a pull request review.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>APPROVE</td>
<td>
<p>Submit feedback and approve merging these changes.</p>
</td>
</tr>
<tr>
<td>COMMENT</td>
<td>
<p>Submit general feedback without explicit approval.</p>
</td>
</tr>
<tr>
<td>DISMISS</td>
<td>
<p>Dismiss review so it now longer effects merging.</p>
</td>
</tr>
<tr>
<td>REQUEST_CHANGES</td>
<td>
<p>Submit feedback that must be addressed before merging.</p>
</td>
</tr>
</tbody>
</table>

## PullRequestReviewState

The possible states of a pull request review.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>APPROVED</td>
<td>
<p>A review allowing the pull request to merge.</p>
</td>
</tr>
<tr>
<td>CHANGES_REQUESTED</td>
<td>
<p>A review blocking the pull request from merging.</p>
</td>
</tr>
<tr>
<td>COMMENTED</td>
<td>
<p>An informational review.</p>
</td>
</tr>
<tr>
<td>DISMISSED</td>
<td>
<p>A review that has been dismissed.</p>
</td>
</tr>
<tr>
<td>PENDING</td>
<td>
<p>A review that has not yet been submitted.</p>
</td>
</tr>
</tbody>
</table>

## PullRequestState

The possible states of a pull request.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>CLOSED</td>
<td>
<p>A pull request that has been closed without being merged.</p>
</td>
</tr>
<tr>
<td>MERGED</td>
<td>
<p>A pull request that has been closed by being merged.</p>
</td>
</tr>
<tr>
<td>OPEN</td>
<td>
<p>A pull request that is still open.</p>
</td>
</tr>
</tbody>
</table>

## PullRequestTimelineItemsItemType

The possible item types found in a timeline.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>ADDED_TO_PROJECT_EVENT</td>
<td>
<p>Represents a &#39;added_to_project&#39; event on a given issue or pull request.</p>
</td>
</tr>
<tr>
<td>ASSIGNED_EVENT</td>
<td>
<p>Represents an &#39;assigned&#39; event on any assignable object.</p>
</td>
</tr>
<tr>
<td>AUTOMATIC_BASE_CHANGE_FAILED_EVENT</td>
<td>
<p>Represents a &#39;automatic_base_change_failed&#39; event on a given pull request.</p>
</td>
</tr>
<tr>
<td>AUTOMATIC_BASE_CHANGE_SUCCEEDED_EVENT</td>
<td>
<p>Represents a &#39;automatic_base_change_succeeded&#39; event on a given pull request.</p>
</td>
</tr>
<tr>
<td>AUTO_MERGE_DISABLED_EVENT</td>
<td>
<p>Represents a &#39;auto_merge_disabled&#39; event on a given pull request.</p>
</td>
</tr>
<tr>
<td>AUTO_MERGE_ENABLED_EVENT</td>
<td>
<p>Represents a &#39;auto_merge_enabled&#39; event on a given pull request.</p>
</td>
</tr>
<tr>
<td>AUTO_REBASE_ENABLED_EVENT</td>
<td>
<p>Represents a &#39;auto_rebase_enabled&#39; event on a given pull request.</p>
</td>
</tr>
<tr>
<td>AUTO_SQUASH_ENABLED_EVENT</td>
<td>
<p>Represents a &#39;auto_squash_enabled&#39; event on a given pull request.</p>
</td>
</tr>
<tr>
<td>BASE_REF_CHANGED_EVENT</td>
<td>
<p>Represents a &#39;base_ref_changed&#39; event on a given issue or pull request.</p>
</td>
</tr>
<tr>
<td>BASE_REF_DELETED_EVENT</td>
<td>
<p>Represents a &#39;base_ref_deleted&#39; event on a given pull request.</p>
</td>
</tr>
<tr>
<td>BASE_REF_FORCE_PUSHED_EVENT</td>
<td>
<p>Represents a &#39;base_ref_force_pushed&#39; event on a given pull request.</p>
</td>
</tr>
<tr>
<td>CLOSED_EVENT</td>
<td>
<p>Represents a &#39;closed&#39; event on any <code>Closable</code>.</p>
</td>
</tr>
<tr>
<td>COMMENT_DELETED_EVENT</td>
<td>
<p>Represents a &#39;comment_deleted&#39; event on a given issue or pull request.</p>
</td>
</tr>
<tr>
<td>CONNECTED_EVENT</td>
<td>
<p>Represents a &#39;connected&#39; event on a given issue or pull request.</p>
</td>
</tr>
<tr>
<td>CONVERTED_NOTE_TO_ISSUE_EVENT</td>
<td>
<p>Represents a &#39;converted_note_to_issue&#39; event on a given issue or pull request.</p>
</td>
</tr>
<tr>
<td>CONVERT_TO_DRAFT_EVENT</td>
<td>
<p>Represents a &#39;convert_to_draft&#39; event on a given pull request.</p>
</td>
</tr>
<tr>
<td>CROSS_REFERENCED_EVENT</td>
<td>
<p>Represents a mention made by one issue or pull request to another.</p>
</td>
</tr>
<tr>
<td>DEMILESTONED_EVENT</td>
<td>
<p>Represents a &#39;demilestoned&#39; event on a given issue or pull request.</p>
</td>
</tr>
<tr>
<td>DEPLOYED_EVENT</td>
<td>
<p>Represents a &#39;deployed&#39; event on a given pull request.</p>
</td>
</tr>
<tr>
<td>DEPLOYMENT_ENVIRONMENT_CHANGED_EVENT</td>
<td>
<p>Represents a &#39;deployment_environment_changed&#39; event on a given pull request.</p>
</td>
</tr>
<tr>
<td>DISCONNECTED_EVENT</td>
<td>
<p>Represents a &#39;disconnected&#39; event on a given issue or pull request.</p>
</td>
</tr>
<tr>
<td>HEAD_REF_DELETED_EVENT</td>
<td>
<p>Represents a &#39;head_ref_deleted&#39; event on a given pull request.</p>
</td>
</tr>
<tr>
<td>HEAD_REF_FORCE_PUSHED_EVENT</td>
<td>
<p>Represents a &#39;head_ref_force_pushed&#39; event on a given pull request.</p>
</td>
</tr>
<tr>
<td>HEAD_REF_RESTORED_EVENT</td>
<td>
<p>Represents a &#39;head_ref_restored&#39; event on a given pull request.</p>
</td>
</tr>
<tr>
<td>ISSUE_COMMENT</td>
<td>
<p>Represents a comment on an Issue.</p>
</td>
</tr>
<tr>
<td>LABELED_EVENT</td>
<td>
<p>Represents a &#39;labeled&#39; event on a given issue or pull request.</p>
</td>
</tr>
<tr>
<td>LOCKED_EVENT</td>
<td>
<p>Represents a &#39;locked&#39; event on a given issue or pull request.</p>
</td>
</tr>
<tr>
<td>MARKED_AS_DUPLICATE_EVENT</td>
<td>
<p>Represents a &#39;marked_as_duplicate&#39; event on a given issue or pull request.</p>
</td>
</tr>
<tr>
<td>MENTIONED_EVENT</td>
<td>
<p>Represents a &#39;mentioned&#39; event on a given issue or pull request.</p>
</td>
</tr>
<tr>
<td>MERGED_EVENT</td>
<td>
<p>Represents a &#39;merged&#39; event on a given pull request.</p>
</td>
</tr>
<tr>
<td>MILESTONED_EVENT</td>
<td>
<p>Represents a &#39;milestoned&#39; event on a given issue or pull request.</p>
</td>
</tr>
<tr>
<td>MOVED_COLUMNS_IN_PROJECT_EVENT</td>
<td>
<p>Represents a &#39;moved_columns_in_project&#39; event on a given issue or pull request.</p>
</td>
</tr>
<tr>
<td>PINNED_EVENT</td>
<td>
<p>Represents a &#39;pinned&#39; event on a given issue or pull request.</p>
</td>
</tr>
<tr>
<td>PULL_REQUEST_COMMIT</td>
<td>
<p>Represents a Git commit part of a pull request.</p>
</td>
</tr>
<tr>
<td>PULL_REQUEST_COMMIT_COMMENT_THREAD</td>
<td>
<p>Represents a commit comment thread part of a pull request.</p>
</td>
</tr>
<tr>
<td>PULL_REQUEST_REVIEW</td>
<td>
<p>A review object for a given pull request.</p>
</td>
</tr>
<tr>
<td>PULL_REQUEST_REVIEW_THREAD</td>
<td>
<p>A threaded list of comments for a given pull request.</p>
</td>
</tr>
<tr>
<td>PULL_REQUEST_REVISION_MARKER</td>
<td>
<p>Represents the latest point in the pull request timeline for which the viewer has seen the pull request&#39;s commits.</p>
</td>
</tr>
<tr>
<td>READY_FOR_REVIEW_EVENT</td>
<td>
<p>Represents a &#39;ready_for_review&#39; event on a given pull request.</p>
</td>
</tr>
<tr>
<td>REFERENCED_EVENT</td>
<td>
<p>Represents a &#39;referenced&#39; event on a given <code>ReferencedSubject</code>.</p>
</td>
</tr>
<tr>
<td>REMOVED_FROM_PROJECT_EVENT</td>
<td>
<p>Represents a &#39;removed_from_project&#39; event on a given issue or pull request.</p>
</td>
</tr>
<tr>
<td>RENAMED_TITLE_EVENT</td>
<td>
<p>Represents a &#39;renamed&#39; event on a given issue or pull request</p>
</td>
</tr>
<tr>
<td>REOPENED_EVENT</td>
<td>
<p>Represents a &#39;reopened&#39; event on any <code>Closable</code>.</p>
</td>
</tr>
<tr>
<td>REVIEW_DISMISSED_EVENT</td>
<td>
<p>Represents a &#39;review_dismissed&#39; event on a given issue or pull request.</p>
</td>
</tr>
<tr>
<td>REVIEW_REQUESTED_EVENT</td>
<td>
<p>Represents an &#39;review_requested&#39; event on a given pull request.</p>
</td>
</tr>
<tr>
<td>REVIEW_REQUEST_REMOVED_EVENT</td>
<td>
<p>Represents an &#39;review_request_removed&#39; event on a given pull request.</p>
</td>
</tr>
<tr>
<td>SUBSCRIBED_EVENT</td>
<td>
<p>Represents a &#39;subscribed&#39; event on a given <code>Subscribable</code>.</p>
</td>
</tr>
<tr>
<td>TRANSFERRED_EVENT</td>
<td>
<p>Represents a &#39;transferred&#39; event on a given issue or pull request.</p>
</td>
</tr>
<tr>
<td>UNASSIGNED_EVENT</td>
<td>
<p>Represents an &#39;unassigned&#39; event on any assignable object.</p>
</td>
</tr>
<tr>
<td>UNLABELED_EVENT</td>
<td>
<p>Represents an &#39;unlabeled&#39; event on a given issue or pull request.</p>
</td>
</tr>
<tr>
<td>UNLOCKED_EVENT</td>
<td>
<p>Represents an &#39;unlocked&#39; event on a given issue or pull request.</p>
</td>
</tr>
<tr>
<td>UNMARKED_AS_DUPLICATE_EVENT</td>
<td>
<p>Represents an &#39;unmarked_as_duplicate&#39; event on a given issue or pull request.</p>
</td>
</tr>
<tr>
<td>UNPINNED_EVENT</td>
<td>
<p>Represents an &#39;unpinned&#39; event on a given issue or pull request.</p>
</td>
</tr>
<tr>
<td>UNSUBSCRIBED_EVENT</td>
<td>
<p>Represents an &#39;unsubscribed&#39; event on a given <code>Subscribable</code>.</p>
</td>
</tr>
<tr>
<td>USER_BLOCKED_EVENT</td>
<td>
<p>Represents a &#39;user_blocked&#39; event on a given user.</p>
</td>
</tr>
</tbody>
</table>

## PullRequestUpdateState

The possible target states when updating a pull request.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>CLOSED</td>
<td>
<p>A pull request that has been closed without being merged.</p>
</td>
</tr>
<tr>
<td>OPEN</td>
<td>
<p>A pull request that is still open.</p>
</td>
</tr>
</tbody>
</table>

## ReactionContent

Emojis that can be attached to Issues, Pull Requests and Comments.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>CONFUSED</td>
<td>
<p>Represents the <code>:confused:</code> emoji.</p>
</td>
</tr>
<tr>
<td>EYES</td>
<td>
<p>Represents the <code>:eyes:</code> emoji.</p>
</td>
</tr>
<tr>
<td>HEART</td>
<td>
<p>Represents the <code>:heart:</code> emoji.</p>
</td>
</tr>
<tr>
<td>HOORAY</td>
<td>
<p>Represents the <code>:hooray:</code> emoji.</p>
</td>
</tr>
<tr>
<td>LAUGH</td>
<td>
<p>Represents the <code>:laugh:</code> emoji.</p>
</td>
</tr>
<tr>
<td>ROCKET</td>
<td>
<p>Represents the <code>:rocket:</code> emoji.</p>
</td>
</tr>
<tr>
<td>THUMBS_DOWN</td>
<td>
<p>Represents the <code>:-1:</code> emoji.</p>
</td>
</tr>
<tr>
<td>THUMBS_UP</td>
<td>
<p>Represents the <code>:+1:</code> emoji.</p>
</td>
</tr>
</tbody>
</table>

## ReactionOrderField

A list of fields that reactions can be ordered by.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>CREATED_AT</td>
<td>
<p>Allows ordering a list of reactions by when they were created.</p>
</td>
</tr>
</tbody>
</table>

## RefOrderField

Properties by which ref connections can be ordered.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>ALPHABETICAL</td>
<td>
<p>Order refs by their alphanumeric name</p>
</td>
</tr>
<tr>
<td>TAG_COMMIT_DATE</td>
<td>
<p>Order refs by underlying commit date if the ref prefix is refs/tags/</p>
</td>
</tr>
</tbody>
</table>

## ReleaseOrderField

Properties by which release connections can be ordered.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>CREATED_AT</td>
<td>
<p>Order releases by creation time</p>
</td>
</tr>
<tr>
<td>NAME</td>
<td>
<p>Order releases alphabetically by name</p>
</td>
</tr>
</tbody>
</table>

## RepoAccessAuditEntryVisibility

The privacy of a repository

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>INTERNAL</td>
<td>
<p>The repository is visible only to users in the same business.</p>
</td>
</tr>
<tr>
<td>PRIVATE</td>
<td>
<p>The repository is visible only to those with explicit access.</p>
</td>
</tr>
<tr>
<td>PUBLIC</td>
<td>
<p>The repository is visible to everyone.</p>
</td>
</tr>
</tbody>
</table>

## RepoAddMemberAuditEntryVisibility

The privacy of a repository

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>INTERNAL</td>
<td>
<p>The repository is visible only to users in the same business.</p>
</td>
</tr>
<tr>
<td>PRIVATE</td>
<td>
<p>The repository is visible only to those with explicit access.</p>
</td>
</tr>
<tr>
<td>PUBLIC</td>
<td>
<p>The repository is visible to everyone.</p>
</td>
</tr>
</tbody>
</table>

## RepoArchivedAuditEntryVisibility

The privacy of a repository

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>INTERNAL</td>
<td>
<p>The repository is visible only to users in the same business.</p>
</td>
</tr>
<tr>
<td>PRIVATE</td>
<td>
<p>The repository is visible only to those with explicit access.</p>
</td>
</tr>
<tr>
<td>PUBLIC</td>
<td>
<p>The repository is visible to everyone.</p>
</td>
</tr>
</tbody>
</table>

## RepoChangeMergeSettingAuditEntryMergeType

The merge options available for pull requests to this repository.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>MERGE</td>
<td>
<p>The pull request is added to the base branch in a merge commit.</p>
</td>
</tr>
<tr>
<td>REBASE</td>
<td>
<p>Commits from the pull request are added onto the base branch individually without a merge commit.</p>
</td>
</tr>
<tr>
<td>SQUASH</td>
<td>
<p>The pull request&#39;s commits are squashed into a single commit before they are merged to the base branch.</p>
</td>
</tr>
</tbody>
</table>

## RepoCreateAuditEntryVisibility

The privacy of a repository

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>INTERNAL</td>
<td>
<p>The repository is visible only to users in the same business.</p>
</td>
</tr>
<tr>
<td>PRIVATE</td>
<td>
<p>The repository is visible only to those with explicit access.</p>
</td>
</tr>
<tr>
<td>PUBLIC</td>
<td>
<p>The repository is visible to everyone.</p>
</td>
</tr>
</tbody>
</table>

## RepoDestroyAuditEntryVisibility

The privacy of a repository

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>INTERNAL</td>
<td>
<p>The repository is visible only to users in the same business.</p>
</td>
</tr>
<tr>
<td>PRIVATE</td>
<td>
<p>The repository is visible only to those with explicit access.</p>
</td>
</tr>
<tr>
<td>PUBLIC</td>
<td>
<p>The repository is visible to everyone.</p>
</td>
</tr>
</tbody>
</table>

## RepoRemoveMemberAuditEntryVisibility

The privacy of a repository

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>INTERNAL</td>
<td>
<p>The repository is visible only to users in the same business.</p>
</td>
</tr>
<tr>
<td>PRIVATE</td>
<td>
<p>The repository is visible only to those with explicit access.</p>
</td>
</tr>
<tr>
<td>PUBLIC</td>
<td>
<p>The repository is visible to everyone.</p>
</td>
</tr>
</tbody>
</table>

## ReportedContentClassifiers

The reasons a piece of content can be reported or minimized.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>ABUSE</td>
<td>
<p>An abusive or harassing piece of content</p>
</td>
</tr>
<tr>
<td>DUPLICATE</td>
<td>
<p>A duplicated piece of content</p>
</td>
</tr>
<tr>
<td>OFF_TOPIC</td>
<td>
<p>An irrelevant piece of content</p>
</td>
</tr>
<tr>
<td>OUTDATED</td>
<td>
<p>An outdated piece of content</p>
</td>
</tr>
<tr>
<td>RESOLVED</td>
<td>
<p>The content has been resolved</p>
</td>
</tr>
<tr>
<td>SPAM</td>
<td>
<p>A spammy piece of content</p>
</td>
</tr>
</tbody>
</table>

## RepositoryAffiliation

The affiliation of a user to a repository

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>COLLABORATOR</td>
<td>
<p>Repositories that the user has been added to as a collaborator.</p>
</td>
</tr>
<tr>
<td>ORGANIZATION_MEMBER</td>
<td>
<p>Repositories that the user has access to through being a member of an
organization. This includes every repository on every team that the user is on.</p>
</td>
</tr>
<tr>
<td>OWNER</td>
<td>
<p>Repositories that are owned by the authenticated user.</p>
</td>
</tr>
</tbody>
</table>

## RepositoryContributionType

The reason a repository is listed as 'contributed'.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>COMMIT</td>
<td>
<p>Created a commit</p>
</td>
</tr>
<tr>
<td>ISSUE</td>
<td>
<p>Created an issue</p>
</td>
</tr>
<tr>
<td>PULL_REQUEST</td>
<td>
<p>Created a pull request</p>
</td>
</tr>
<tr>
<td>PULL_REQUEST_REVIEW</td>
<td>
<p>Reviewed a pull request</p>
</td>
</tr>
<tr>
<td>REPOSITORY</td>
<td>
<p>Created the repository</p>
</td>
</tr>
</tbody>
</table>

## RepositoryInteractionLimit

A repository interaction limit.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>COLLABORATORS_ONLY</td>
<td>
<p>Users that are not collaborators will not be able to interact with the repository.</p>
</td>
</tr>
<tr>
<td>CONTRIBUTORS_ONLY</td>
<td>
<p>Users that have not previously committed to a repository’s default branch will be unable to interact with the repository.</p>
</td>
</tr>
<tr>
<td>EXISTING_USERS</td>
<td>
<p>Users that have recently created their account will be unable to interact with the repository.</p>
</td>
</tr>
<tr>
<td>NO_LIMIT</td>
<td>
<p>No interaction limits are enabled.</p>
</td>
</tr>
</tbody>
</table>

## RepositoryInteractionLimitExpiry

The length for a repository interaction limit to be enabled for.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>ONE_DAY</td>
<td>
<p>The interaction limit will expire after 1 day.</p>
</td>
</tr>
<tr>
<td>ONE_MONTH</td>
<td>
<p>The interaction limit will expire after 1 month.</p>
</td>
</tr>
<tr>
<td>ONE_WEEK</td>
<td>
<p>The interaction limit will expire after 1 week.</p>
</td>
</tr>
<tr>
<td>SIX_MONTHS</td>
<td>
<p>The interaction limit will expire after 6 months.</p>
</td>
</tr>
<tr>
<td>THREE_DAYS</td>
<td>
<p>The interaction limit will expire after 3 days.</p>
</td>
</tr>
</tbody>
</table>

## RepositoryInteractionLimitOrigin

Indicates where an interaction limit is configured.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>ORGANIZATION</td>
<td>
<p>A limit that is configured at the organization level.</p>
</td>
</tr>
<tr>
<td>REPOSITORY</td>
<td>
<p>A limit that is configured at the repository level.</p>
</td>
</tr>
<tr>
<td>USER</td>
<td>
<p>A limit that is configured at the user-wide level.</p>
</td>
</tr>
</tbody>
</table>

## RepositoryInvitationOrderField

Properties by which repository invitation connections can be ordered.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>CREATED_AT</td>
<td>
<p>Order repository invitations by creation time</p>
</td>
</tr>
<tr>
<td>INVITEE_LOGIN</td>
<td>
<p>Order repository invitations by invitee login</p>
</td>
</tr>
</tbody>
</table>

## RepositoryLockReason

The possible reasons a given repository could be in a locked state.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>BILLING</td>
<td>
<p>The repository is locked due to a billing related reason.</p>
</td>
</tr>
<tr>
<td>MIGRATING</td>
<td>
<p>The repository is locked due to a migration.</p>
</td>
</tr>
<tr>
<td>MOVING</td>
<td>
<p>The repository is locked due to a move.</p>
</td>
</tr>
<tr>
<td>RENAME</td>
<td>
<p>The repository is locked due to a rename.</p>
</td>
</tr>
</tbody>
</table>

## RepositoryOrderField

Properties by which repository connections can be ordered.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>CREATED_AT</td>
<td>
<p>Order repositories by creation time</p>
</td>
</tr>
<tr>
<td>NAME</td>
<td>
<p>Order repositories by name</p>
</td>
</tr>
<tr>
<td>PUSHED_AT</td>
<td>
<p>Order repositories by push time</p>
</td>
</tr>
<tr>
<td>STARGAZERS</td>
<td>
<p>Order repositories by number of stargazers</p>
</td>
</tr>
<tr>
<td>UPDATED_AT</td>
<td>
<p>Order repositories by update time</p>
</td>
</tr>
</tbody>
</table>

## RepositoryPermission

The access level to a repository

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>ADMIN</td>
<td>
<p>Can read, clone, and push to this repository. Can also manage issues, pull
requests, and repository settings, including adding collaborators</p>
</td>
</tr>
<tr>
<td>MAINTAIN</td>
<td>
<p>Can read, clone, and push to this repository. They can also manage issues, pull requests, and some repository settings</p>
</td>
</tr>
<tr>
<td>READ</td>
<td>
<p>Can read and clone this repository. Can also open and comment on issues and pull requests</p>
</td>
</tr>
<tr>
<td>TRIAGE</td>
<td>
<p>Can read and clone this repository. Can also manage issues and pull requests</p>
</td>
</tr>
<tr>
<td>WRITE</td>
<td>
<p>Can read, clone, and push to this repository. Can also manage issues and pull requests</p>
</td>
</tr>
</tbody>
</table>

## RepositoryPrivacy

The privacy of a repository

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>PRIVATE</td>
<td>
<p>Private</p>
</td>
</tr>
<tr>
<td>PUBLIC</td>
<td>
<p>Public</p>
</td>
</tr>
</tbody>
</table>

## RepositoryVisibility

The repository's visibility level.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>INTERNAL</td>
<td>
<p>The repository is visible only to users in the same business.</p>
</td>
</tr>
<tr>
<td>PRIVATE</td>
<td>
<p>The repository is visible only to those with explicit access.</p>
</td>
</tr>
<tr>
<td>PUBLIC</td>
<td>
<p>The repository is visible to everyone.</p>
</td>
</tr>
</tbody>
</table>

## RequestableCheckStatusState

The possible states that can be requested when creating a check run.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>COMPLETED</td>
<td>
<p>The check suite or run has been completed.</p>
</td>
</tr>
<tr>
<td>IN_PROGRESS</td>
<td>
<p>The check suite or run is in progress.</p>
</td>
</tr>
<tr>
<td>QUEUED</td>
<td>
<p>The check suite or run has been queued.</p>
</td>
</tr>
<tr>
<td>WAITING</td>
<td>
<p>The check suite or run is in waiting state.</p>
</td>
</tr>
</tbody>
</table>

## SamlDigestAlgorithm

The possible digest algorithms used to sign SAML requests for an identity provider.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>SHA1</td>
<td>
<p>SHA1</p>
</td>
</tr>
<tr>
<td>SHA256</td>
<td>
<p>SHA256</p>
</td>
</tr>
<tr>
<td>SHA384</td>
<td>
<p>SHA384</p>
</td>
</tr>
<tr>
<td>SHA512</td>
<td>
<p>SHA512</p>
</td>
</tr>
</tbody>
</table>

## SamlSignatureAlgorithm

The possible signature algorithms used to sign SAML requests for a Identity Provider.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>RSA_SHA1</td>
<td>
<p>RSA-SHA1</p>
</td>
</tr>
<tr>
<td>RSA_SHA256</td>
<td>
<p>RSA-SHA256</p>
</td>
</tr>
<tr>
<td>RSA_SHA384</td>
<td>
<p>RSA-SHA384</p>
</td>
</tr>
<tr>
<td>RSA_SHA512</td>
<td>
<p>RSA-SHA512</p>
</td>
</tr>
</tbody>
</table>

## SavedReplyOrderField

Properties by which saved reply connections can be ordered.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>UPDATED_AT</td>
<td>
<p>Order saved reply by when they were updated.</p>
</td>
</tr>
</tbody>
</table>

## SearchType

Represents the individual results of a search.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>ISSUE</td>
<td>
<p>Returns results matching issues in repositories.</p>
</td>
</tr>
<tr>
<td>REPOSITORY</td>
<td>
<p>Returns results matching repositories.</p>
</td>
</tr>
<tr>
<td>USER</td>
<td>
<p>Returns results matching users and organizations on GitHub.</p>
</td>
</tr>
</tbody>
</table>

## SecurityAdvisoryEcosystem

The possible ecosystems of a security vulnerability's package.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>COMPOSER</td>
<td>
<p>PHP packages hosted at packagist.org</p>
</td>
</tr>
<tr>
<td>MAVEN</td>
<td>
<p>Java artifacts hosted at the Maven central repository</p>
</td>
</tr>
<tr>
<td>NPM</td>
<td>
<p>JavaScript packages hosted at npmjs.com</p>
</td>
</tr>
<tr>
<td>NUGET</td>
<td>
<p>.NET packages hosted at the NuGet Gallery</p>
</td>
</tr>
<tr>
<td>PIP</td>
<td>
<p>Python packages hosted at PyPI.org</p>
</td>
</tr>
<tr>
<td>RUBYGEMS</td>
<td>
<p>Ruby gems hosted at RubyGems.org</p>
</td>
</tr>
</tbody>
</table>

## SecurityAdvisoryIdentifierType

Identifier formats available for advisories.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>CVE</td>
<td>
<p>Common Vulnerabilities and Exposures Identifier.</p>
</td>
</tr>
<tr>
<td>GHSA</td>
<td>
<p>GitHub Security Advisory ID.</p>
</td>
</tr>
</tbody>
</table>

## SecurityAdvisoryOrderField

Properties by which security advisory connections can be ordered.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>PUBLISHED_AT</td>
<td>
<p>Order advisories by publication time</p>
</td>
</tr>
<tr>
<td>UPDATED_AT</td>
<td>
<p>Order advisories by update time</p>
</td>
</tr>
</tbody>
</table>

## SecurityAdvisorySeverity

Severity of the vulnerability.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>CRITICAL</td>
<td>
<p>Critical.</p>
</td>
</tr>
<tr>
<td>HIGH</td>
<td>
<p>High.</p>
</td>
</tr>
<tr>
<td>LOW</td>
<td>
<p>Low.</p>
</td>
</tr>
<tr>
<td>MODERATE</td>
<td>
<p>Moderate.</p>
</td>
</tr>
</tbody>
</table>

## SecurityVulnerabilityOrderField

Properties by which security vulnerability connections can be ordered.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>UPDATED_AT</td>
<td>
<p>Order vulnerability by update time</p>
</td>
</tr>
</tbody>
</table>

## SponsorableOrderField

Properties by which sponsorable connections can be ordered.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>LOGIN</td>
<td>
<p>Order sponsorable entities by login (username).</p>
</td>
</tr>
</tbody>
</table>

## SponsorsGoalKind

The different kinds of goals a GitHub Sponsors member can have.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>MONTHLY_SPONSORSHIP_AMOUNT</td>
<td>
<p>The goal is about getting a certain dollar amount from sponsorships each month.</p>
</td>
</tr>
<tr>
<td>TOTAL_SPONSORS_COUNT</td>
<td>
<p>The goal is about reaching a certain number of sponsors.</p>
</td>
</tr>
</tbody>
</table>

## SponsorshipOrderField

Properties by which sponsorship connections can be ordered.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>CREATED_AT</td>
<td>
<p>Order sponsorship by creation time.</p>
</td>
</tr>
</tbody>
</table>

## SponsorshipPrivacy

The privacy of a sponsorship

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>PRIVATE</td>
<td>
<p>Private</p>
</td>
</tr>
<tr>
<td>PUBLIC</td>
<td>
<p>Public</p>
</td>
</tr>
</tbody>
</table>

## SponsorsTierOrderField

Properties by which Sponsors tiers connections can be ordered.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>CREATED_AT</td>
<td>
<p>Order tiers by creation time.</p>
</td>
</tr>
<tr>
<td>MONTHLY_PRICE_IN_CENTS</td>
<td>
<p>Order tiers by their monthly price in cents</p>
</td>
</tr>
</tbody>
</table>

## StarOrderField

Properties by which star connections can be ordered.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>STARRED_AT</td>
<td>
<p>Allows ordering a list of stars by when they were created.</p>
</td>
</tr>
</tbody>
</table>

## StatusState

The possible commit status states.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>ERROR</td>
<td>
<p>Status is errored.</p>
</td>
</tr>
<tr>
<td>EXPECTED</td>
<td>
<p>Status is expected.</p>
</td>
</tr>
<tr>
<td>FAILURE</td>
<td>
<p>Status is failing.</p>
</td>
</tr>
<tr>
<td>PENDING</td>
<td>
<p>Status is pending.</p>
</td>
</tr>
<tr>
<td>SUCCESS</td>
<td>
<p>Status is successful.</p>
</td>
</tr>
</tbody>
</table>

## SubscriptionState

The possible states of a subscription.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>IGNORED</td>
<td>
<p>The User is never notified.</p>
</td>
</tr>
<tr>
<td>SUBSCRIBED</td>
<td>
<p>The User is notified of all conversations.</p>
</td>
</tr>
<tr>
<td>UNSUBSCRIBED</td>
<td>
<p>The User is only notified when participating or @mentioned.</p>
</td>
</tr>
</tbody>
</table>

## TeamDiscussionCommentOrderField

Properties by which team discussion comment connections can be ordered.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>NUMBER</td>
<td>
<p>Allows sequential ordering of team discussion comments (which is equivalent to chronological ordering).</p>
</td>
</tr>
</tbody>
</table>

## TeamDiscussionOrderField

Properties by which team discussion connections can be ordered.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>CREATED_AT</td>
<td>
<p>Allows chronological ordering of team discussions.</p>
</td>
</tr>
</tbody>
</table>

## TeamMemberOrderField

Properties by which team member connections can be ordered.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>CREATED_AT</td>
<td>
<p>Order team members by creation time</p>
</td>
</tr>
<tr>
<td>LOGIN</td>
<td>
<p>Order team members by login</p>
</td>
</tr>
</tbody>
</table>

## TeamMemberRole

The possible team member roles; either 'maintainer' or 'member'.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>MAINTAINER</td>
<td>
<p>A team maintainer has permission to add and remove team members.</p>
</td>
</tr>
<tr>
<td>MEMBER</td>
<td>
<p>A team member has no administrative permissions on the team.</p>
</td>
</tr>
</tbody>
</table>

## TeamMembershipType

Defines which types of team members are included in the returned list. Can be one of IMMEDIATE, CHILD_TEAM or ALL.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>ALL</td>
<td>
<p>Includes immediate and child team members for the team.</p>
</td>
</tr>
<tr>
<td>CHILD_TEAM</td>
<td>
<p>Includes only child team members for the team.</p>
</td>
</tr>
<tr>
<td>IMMEDIATE</td>
<td>
<p>Includes only immediate members of the team.</p>
</td>
</tr>
</tbody>
</table>

## TeamOrderField

Properties by which team connections can be ordered.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>NAME</td>
<td>
<p>Allows ordering a list of teams by name.</p>
</td>
</tr>
</tbody>
</table>

## TeamPrivacy

The possible team privacy values.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>SECRET</td>
<td>
<p>A secret team can only be seen by its members.</p>
</td>
</tr>
<tr>
<td>VISIBLE</td>
<td>
<p>A visible team can be seen and @mentioned by every member of the organization.</p>
</td>
</tr>
</tbody>
</table>

## TeamRepositoryOrderField

Properties by which team repository connections can be ordered.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>CREATED_AT</td>
<td>
<p>Order repositories by creation time</p>
</td>
</tr>
<tr>
<td>NAME</td>
<td>
<p>Order repositories by name</p>
</td>
</tr>
<tr>
<td>PERMISSION</td>
<td>
<p>Order repositories by permission</p>
</td>
</tr>
<tr>
<td>PUSHED_AT</td>
<td>
<p>Order repositories by push time</p>
</td>
</tr>
<tr>
<td>STARGAZERS</td>
<td>
<p>Order repositories by number of stargazers</p>
</td>
</tr>
<tr>
<td>UPDATED_AT</td>
<td>
<p>Order repositories by update time</p>
</td>
</tr>
</tbody>
</table>

## TeamReviewAssignmentAlgorithm

The possible team review assignment algorithms

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>LOAD_BALANCE</td>
<td>
<p>Balance review load across the entire team</p>
</td>
</tr>
<tr>
<td>ROUND_ROBIN</td>
<td>
<p>Alternate reviews between each team member</p>
</td>
</tr>
</tbody>
</table>

## TeamRole

The role of a user on a team.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>ADMIN</td>
<td>
<p>User has admin rights on the team.</p>
</td>
</tr>
<tr>
<td>MEMBER</td>
<td>
<p>User is a member of the team.</p>
</td>
</tr>
</tbody>
</table>

## TopicSuggestionDeclineReason

Reason that the suggested topic is declined.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>NOT_RELEVANT</td>
<td>
<p>The suggested topic is not relevant to the repository.</p>
</td>
</tr>
<tr>
<td>PERSONAL_PREFERENCE</td>
<td>
<p>The viewer does not like the suggested topic.</p>
</td>
</tr>
<tr>
<td>TOO_GENERAL</td>
<td>
<p>The suggested topic is too general for the repository.</p>
</td>
</tr>
<tr>
<td>TOO_SPECIFIC</td>
<td>
<p>The suggested topic is too specific for the repository (e.g. #ruby-on-rails-version-4-2-1).</p>
</td>
</tr>
</tbody>
</table>

## UserBlockDuration

The possible durations that a user can be blocked for.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>ONE_DAY</td>
<td>
<p>The user was blocked for 1 day</p>
</td>
</tr>
<tr>
<td>ONE_MONTH</td>
<td>
<p>The user was blocked for 30 days</p>
</td>
</tr>
<tr>
<td>ONE_WEEK</td>
<td>
<p>The user was blocked for 7 days</p>
</td>
</tr>
<tr>
<td>PERMANENT</td>
<td>
<p>The user was blocked permanently</p>
</td>
</tr>
<tr>
<td>THREE_DAYS</td>
<td>
<p>The user was blocked for 3 days</p>
</td>
</tr>
</tbody>
</table>

## UserStatusOrderField

Properties by which user status connections can be ordered.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>UPDATED_AT</td>
<td>
<p>Order user statuses by when they were updated.</p>
</td>
</tr>
</tbody>
</table>

## VerifiableDomainOrderField

Properties by which verifiable domain connections can be ordered.

**Values**

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>CREATED_AT</td>
<td>
<p>Order verifiable domains by their creation date.</p>
</td>
</tr>
<tr>
<td>DOMAIN</td>
<td>
<p>Order verifiable domains by the domain name.</p>
</td>
</tr>
</tbody>
</table>

