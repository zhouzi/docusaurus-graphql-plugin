---
id: unions
title: Unions
slug: unions
---

## Assignee

Types that can be assigned to issues.

<p style={{ marginBottom: "0.4em" }}><strong>Possible types</strong></p>

- [Bot](/docusaurus-plugin-content-graphql/github-example/objects#bot)
- [Mannequin](/docusaurus-plugin-content-graphql/github-example/objects#mannequin)
- [Organization](/docusaurus-plugin-content-graphql/github-example/objects#organization)
- [User](/docusaurus-plugin-content-graphql/github-example/objects#user)

## AuditEntryActor

Types that can initiate an audit log event.

<p style={{ marginBottom: "0.4em" }}><strong>Possible types</strong></p>

- [Bot](/docusaurus-plugin-content-graphql/github-example/objects#bot)
- [Organization](/docusaurus-plugin-content-graphql/github-example/objects#organization)
- [User](/docusaurus-plugin-content-graphql/github-example/objects#user)

## Closer

The object which triggered a `ClosedEvent`.

<p style={{ marginBottom: "0.4em" }}><strong>Possible types</strong></p>

- [Commit](/docusaurus-plugin-content-graphql/github-example/objects#commit)
- [PullRequest](/docusaurus-plugin-content-graphql/github-example/objects#pullrequest)

## CreatedIssueOrRestrictedContribution

Represents either a issue the viewer can access or a restricted contribution.

<p style={{ marginBottom: "0.4em" }}><strong>Possible types</strong></p>

- [CreatedIssueContribution](/docusaurus-plugin-content-graphql/github-example/objects#createdissuecontribution)
- [RestrictedContribution](/docusaurus-plugin-content-graphql/github-example/objects#restrictedcontribution)

## CreatedPullRequestOrRestrictedContribution

Represents either a pull request the viewer can access or a restricted contribution.

<p style={{ marginBottom: "0.4em" }}><strong>Possible types</strong></p>

- [CreatedPullRequestContribution](/docusaurus-plugin-content-graphql/github-example/objects#createdpullrequestcontribution)
- [RestrictedContribution](/docusaurus-plugin-content-graphql/github-example/objects#restrictedcontribution)

## CreatedRepositoryOrRestrictedContribution

Represents either a repository the viewer can access or a restricted contribution.

<p style={{ marginBottom: "0.4em" }}><strong>Possible types</strong></p>

- [CreatedRepositoryContribution](/docusaurus-plugin-content-graphql/github-example/objects#createdrepositorycontribution)
- [RestrictedContribution](/docusaurus-plugin-content-graphql/github-example/objects#restrictedcontribution)

## EnterpriseMember

An object that is a member of an enterprise.

<p style={{ marginBottom: "0.4em" }}><strong>Possible types</strong></p>

- [EnterpriseUserAccount](/docusaurus-plugin-content-graphql/github-example/objects#enterpriseuseraccount)
- [User](/docusaurus-plugin-content-graphql/github-example/objects#user)

## IpAllowListOwner

Types that can own an IP allow list.

<p style={{ marginBottom: "0.4em" }}><strong>Possible types</strong></p>

- [Enterprise](/docusaurus-plugin-content-graphql/github-example/objects#enterprise)
- [Organization](/docusaurus-plugin-content-graphql/github-example/objects#organization)

## IssueOrPullRequest

Used for return value of Repository.issueOrPullRequest.

<p style={{ marginBottom: "0.4em" }}><strong>Possible types</strong></p>

- [Issue](/docusaurus-plugin-content-graphql/github-example/objects#issue)
- [PullRequest](/docusaurus-plugin-content-graphql/github-example/objects#pullrequest)

## IssueTimelineItem

An item in an issue timeline

<p style={{ marginBottom: "0.4em" }}><strong>Possible types</strong></p>

- [AssignedEvent](/docusaurus-plugin-content-graphql/github-example/objects#assignedevent)
- [ClosedEvent](/docusaurus-plugin-content-graphql/github-example/objects#closedevent)
- [Commit](/docusaurus-plugin-content-graphql/github-example/objects#commit)
- [CrossReferencedEvent](/docusaurus-plugin-content-graphql/github-example/objects#crossreferencedevent)
- [DemilestonedEvent](/docusaurus-plugin-content-graphql/github-example/objects#demilestonedevent)
- [IssueComment](/docusaurus-plugin-content-graphql/github-example/objects#issuecomment)
- [LabeledEvent](/docusaurus-plugin-content-graphql/github-example/objects#labeledevent)
- [LockedEvent](/docusaurus-plugin-content-graphql/github-example/objects#lockedevent)
- [MilestonedEvent](/docusaurus-plugin-content-graphql/github-example/objects#milestonedevent)
- [ReferencedEvent](/docusaurus-plugin-content-graphql/github-example/objects#referencedevent)
- [RenamedTitleEvent](/docusaurus-plugin-content-graphql/github-example/objects#renamedtitleevent)
- [ReopenedEvent](/docusaurus-plugin-content-graphql/github-example/objects#reopenedevent)
- [SubscribedEvent](/docusaurus-plugin-content-graphql/github-example/objects#subscribedevent)
- [TransferredEvent](/docusaurus-plugin-content-graphql/github-example/objects#transferredevent)
- [UnassignedEvent](/docusaurus-plugin-content-graphql/github-example/objects#unassignedevent)
- [UnlabeledEvent](/docusaurus-plugin-content-graphql/github-example/objects#unlabeledevent)
- [UnlockedEvent](/docusaurus-plugin-content-graphql/github-example/objects#unlockedevent)
- [UnsubscribedEvent](/docusaurus-plugin-content-graphql/github-example/objects#unsubscribedevent)
- [UserBlockedEvent](/docusaurus-plugin-content-graphql/github-example/objects#userblockedevent)

## IssueTimelineItems

An item in an issue timeline

<p style={{ marginBottom: "0.4em" }}><strong>Possible types</strong></p>

- [AddedToProjectEvent](/docusaurus-plugin-content-graphql/github-example/objects#addedtoprojectevent)
- [AssignedEvent](/docusaurus-plugin-content-graphql/github-example/objects#assignedevent)
- [ClosedEvent](/docusaurus-plugin-content-graphql/github-example/objects#closedevent)
- [CommentDeletedEvent](/docusaurus-plugin-content-graphql/github-example/objects#commentdeletedevent)
- [ConnectedEvent](/docusaurus-plugin-content-graphql/github-example/objects#connectedevent)
- [ConvertedNoteToIssueEvent](/docusaurus-plugin-content-graphql/github-example/objects#convertednotetoissueevent)
- [CrossReferencedEvent](/docusaurus-plugin-content-graphql/github-example/objects#crossreferencedevent)
- [DemilestonedEvent](/docusaurus-plugin-content-graphql/github-example/objects#demilestonedevent)
- [DisconnectedEvent](/docusaurus-plugin-content-graphql/github-example/objects#disconnectedevent)
- [IssueComment](/docusaurus-plugin-content-graphql/github-example/objects#issuecomment)
- [LabeledEvent](/docusaurus-plugin-content-graphql/github-example/objects#labeledevent)
- [LockedEvent](/docusaurus-plugin-content-graphql/github-example/objects#lockedevent)
- [MarkedAsDuplicateEvent](/docusaurus-plugin-content-graphql/github-example/objects#markedasduplicateevent)
- [MentionedEvent](/docusaurus-plugin-content-graphql/github-example/objects#mentionedevent)
- [MilestonedEvent](/docusaurus-plugin-content-graphql/github-example/objects#milestonedevent)
- [MovedColumnsInProjectEvent](/docusaurus-plugin-content-graphql/github-example/objects#movedcolumnsinprojectevent)
- [PinnedEvent](/docusaurus-plugin-content-graphql/github-example/objects#pinnedevent)
- [ReferencedEvent](/docusaurus-plugin-content-graphql/github-example/objects#referencedevent)
- [RemovedFromProjectEvent](/docusaurus-plugin-content-graphql/github-example/objects#removedfromprojectevent)
- [RenamedTitleEvent](/docusaurus-plugin-content-graphql/github-example/objects#renamedtitleevent)
- [ReopenedEvent](/docusaurus-plugin-content-graphql/github-example/objects#reopenedevent)
- [SubscribedEvent](/docusaurus-plugin-content-graphql/github-example/objects#subscribedevent)
- [TransferredEvent](/docusaurus-plugin-content-graphql/github-example/objects#transferredevent)
- [UnassignedEvent](/docusaurus-plugin-content-graphql/github-example/objects#unassignedevent)
- [UnlabeledEvent](/docusaurus-plugin-content-graphql/github-example/objects#unlabeledevent)
- [UnlockedEvent](/docusaurus-plugin-content-graphql/github-example/objects#unlockedevent)
- [UnmarkedAsDuplicateEvent](/docusaurus-plugin-content-graphql/github-example/objects#unmarkedasduplicateevent)
- [UnpinnedEvent](/docusaurus-plugin-content-graphql/github-example/objects#unpinnedevent)
- [UnsubscribedEvent](/docusaurus-plugin-content-graphql/github-example/objects#unsubscribedevent)
- [UserBlockedEvent](/docusaurus-plugin-content-graphql/github-example/objects#userblockedevent)

## MilestoneItem

Types that can be inside a Milestone.

<p style={{ marginBottom: "0.4em" }}><strong>Possible types</strong></p>

- [Issue](/docusaurus-plugin-content-graphql/github-example/objects#issue)
- [PullRequest](/docusaurus-plugin-content-graphql/github-example/objects#pullrequest)

## OrganizationAuditEntry

An audit entry in an organization audit log.

<p style={{ marginBottom: "0.4em" }}><strong>Possible types</strong></p>

- [MembersCanDeleteReposClearAuditEntry](/docusaurus-plugin-content-graphql/github-example/objects#memberscandeletereposclearauditentry)
- [MembersCanDeleteReposDisableAuditEntry](/docusaurus-plugin-content-graphql/github-example/objects#memberscandeletereposdisableauditentry)
- [MembersCanDeleteReposEnableAuditEntry](/docusaurus-plugin-content-graphql/github-example/objects#memberscandeletereposenableauditentry)
- [OauthApplicationCreateAuditEntry](/docusaurus-plugin-content-graphql/github-example/objects#oauthapplicationcreateauditentry)
- [OrgAddBillingManagerAuditEntry](/docusaurus-plugin-content-graphql/github-example/objects#orgaddbillingmanagerauditentry)
- [OrgAddMemberAuditEntry](/docusaurus-plugin-content-graphql/github-example/objects#orgaddmemberauditentry)
- [OrgBlockUserAuditEntry](/docusaurus-plugin-content-graphql/github-example/objects#orgblockuserauditentry)
- [OrgConfigDisableCollaboratorsOnlyAuditEntry](/docusaurus-plugin-content-graphql/github-example/objects#orgconfigdisablecollaboratorsonlyauditentry)
- [OrgConfigEnableCollaboratorsOnlyAuditEntry](/docusaurus-plugin-content-graphql/github-example/objects#orgconfigenablecollaboratorsonlyauditentry)
- [OrgCreateAuditEntry](/docusaurus-plugin-content-graphql/github-example/objects#orgcreateauditentry)
- [OrgDisableOauthAppRestrictionsAuditEntry](/docusaurus-plugin-content-graphql/github-example/objects#orgdisableoauthapprestrictionsauditentry)
- [OrgDisableSamlAuditEntry](/docusaurus-plugin-content-graphql/github-example/objects#orgdisablesamlauditentry)
- [OrgDisableTwoFactorRequirementAuditEntry](/docusaurus-plugin-content-graphql/github-example/objects#orgdisabletwofactorrequirementauditentry)
- [OrgEnableOauthAppRestrictionsAuditEntry](/docusaurus-plugin-content-graphql/github-example/objects#orgenableoauthapprestrictionsauditentry)
- [OrgEnableSamlAuditEntry](/docusaurus-plugin-content-graphql/github-example/objects#orgenablesamlauditentry)
- [OrgEnableTwoFactorRequirementAuditEntry](/docusaurus-plugin-content-graphql/github-example/objects#orgenabletwofactorrequirementauditentry)
- [OrgInviteMemberAuditEntry](/docusaurus-plugin-content-graphql/github-example/objects#orginvitememberauditentry)
- [OrgInviteToBusinessAuditEntry](/docusaurus-plugin-content-graphql/github-example/objects#orginvitetobusinessauditentry)
- [OrgOauthAppAccessApprovedAuditEntry](/docusaurus-plugin-content-graphql/github-example/objects#orgoauthappaccessapprovedauditentry)
- [OrgOauthAppAccessDeniedAuditEntry](/docusaurus-plugin-content-graphql/github-example/objects#orgoauthappaccessdeniedauditentry)
- [OrgOauthAppAccessRequestedAuditEntry](/docusaurus-plugin-content-graphql/github-example/objects#orgoauthappaccessrequestedauditentry)
- [OrgRemoveBillingManagerAuditEntry](/docusaurus-plugin-content-graphql/github-example/objects#orgremovebillingmanagerauditentry)
- [OrgRemoveMemberAuditEntry](/docusaurus-plugin-content-graphql/github-example/objects#orgremovememberauditentry)
- [OrgRemoveOutsideCollaboratorAuditEntry](/docusaurus-plugin-content-graphql/github-example/objects#orgremoveoutsidecollaboratorauditentry)
- [OrgRestoreMemberAuditEntry](/docusaurus-plugin-content-graphql/github-example/objects#orgrestorememberauditentry)
- [OrgUnblockUserAuditEntry](/docusaurus-plugin-content-graphql/github-example/objects#orgunblockuserauditentry)
- [OrgUpdateDefaultRepositoryPermissionAuditEntry](/docusaurus-plugin-content-graphql/github-example/objects#orgupdatedefaultrepositorypermissionauditentry)
- [OrgUpdateMemberAuditEntry](/docusaurus-plugin-content-graphql/github-example/objects#orgupdatememberauditentry)
- [OrgUpdateMemberRepositoryCreationPermissionAuditEntry](/docusaurus-plugin-content-graphql/github-example/objects#orgupdatememberrepositorycreationpermissionauditentry)
- [OrgUpdateMemberRepositoryInvitationPermissionAuditEntry](/docusaurus-plugin-content-graphql/github-example/objects#orgupdatememberrepositoryinvitationpermissionauditentry)
- [PrivateRepositoryForkingDisableAuditEntry](/docusaurus-plugin-content-graphql/github-example/objects#privaterepositoryforkingdisableauditentry)
- [PrivateRepositoryForkingEnableAuditEntry](/docusaurus-plugin-content-graphql/github-example/objects#privaterepositoryforkingenableauditentry)
- [RepoAccessAuditEntry](/docusaurus-plugin-content-graphql/github-example/objects#repoaccessauditentry)
- [RepoAddMemberAuditEntry](/docusaurus-plugin-content-graphql/github-example/objects#repoaddmemberauditentry)
- [RepoAddTopicAuditEntry](/docusaurus-plugin-content-graphql/github-example/objects#repoaddtopicauditentry)
- [RepoArchivedAuditEntry](/docusaurus-plugin-content-graphql/github-example/objects#repoarchivedauditentry)
- [RepoChangeMergeSettingAuditEntry](/docusaurus-plugin-content-graphql/github-example/objects#repochangemergesettingauditentry)
- [RepoConfigDisableAnonymousGitAccessAuditEntry](/docusaurus-plugin-content-graphql/github-example/objects#repoconfigdisableanonymousgitaccessauditentry)
- [RepoConfigDisableCollaboratorsOnlyAuditEntry](/docusaurus-plugin-content-graphql/github-example/objects#repoconfigdisablecollaboratorsonlyauditentry)
- [RepoConfigDisableContributorsOnlyAuditEntry](/docusaurus-plugin-content-graphql/github-example/objects#repoconfigdisablecontributorsonlyauditentry)
- [RepoConfigDisableSockpuppetDisallowedAuditEntry](/docusaurus-plugin-content-graphql/github-example/objects#repoconfigdisablesockpuppetdisallowedauditentry)
- [RepoConfigEnableAnonymousGitAccessAuditEntry](/docusaurus-plugin-content-graphql/github-example/objects#repoconfigenableanonymousgitaccessauditentry)
- [RepoConfigEnableCollaboratorsOnlyAuditEntry](/docusaurus-plugin-content-graphql/github-example/objects#repoconfigenablecollaboratorsonlyauditentry)
- [RepoConfigEnableContributorsOnlyAuditEntry](/docusaurus-plugin-content-graphql/github-example/objects#repoconfigenablecontributorsonlyauditentry)
- [RepoConfigEnableSockpuppetDisallowedAuditEntry](/docusaurus-plugin-content-graphql/github-example/objects#repoconfigenablesockpuppetdisallowedauditentry)
- [RepoConfigLockAnonymousGitAccessAuditEntry](/docusaurus-plugin-content-graphql/github-example/objects#repoconfiglockanonymousgitaccessauditentry)
- [RepoConfigUnlockAnonymousGitAccessAuditEntry](/docusaurus-plugin-content-graphql/github-example/objects#repoconfigunlockanonymousgitaccessauditentry)
- [RepoCreateAuditEntry](/docusaurus-plugin-content-graphql/github-example/objects#repocreateauditentry)
- [RepoDestroyAuditEntry](/docusaurus-plugin-content-graphql/github-example/objects#repodestroyauditentry)
- [RepoRemoveMemberAuditEntry](/docusaurus-plugin-content-graphql/github-example/objects#reporemovememberauditentry)
- [RepoRemoveTopicAuditEntry](/docusaurus-plugin-content-graphql/github-example/objects#reporemovetopicauditentry)
- [RepositoryVisibilityChangeDisableAuditEntry](/docusaurus-plugin-content-graphql/github-example/objects#repositoryvisibilitychangedisableauditentry)
- [RepositoryVisibilityChangeEnableAuditEntry](/docusaurus-plugin-content-graphql/github-example/objects#repositoryvisibilitychangeenableauditentry)
- [TeamAddMemberAuditEntry](/docusaurus-plugin-content-graphql/github-example/objects#teamaddmemberauditentry)
- [TeamAddRepositoryAuditEntry](/docusaurus-plugin-content-graphql/github-example/objects#teamaddrepositoryauditentry)
- [TeamChangeParentTeamAuditEntry](/docusaurus-plugin-content-graphql/github-example/objects#teamchangeparentteamauditentry)
- [TeamRemoveMemberAuditEntry](/docusaurus-plugin-content-graphql/github-example/objects#teamremovememberauditentry)
- [TeamRemoveRepositoryAuditEntry](/docusaurus-plugin-content-graphql/github-example/objects#teamremoverepositoryauditentry)

## OrgRestoreMemberAuditEntryMembership

Types of memberships that can be restored for an Organization member.

<p style={{ marginBottom: "0.4em" }}><strong>Possible types</strong></p>

- [OrgRestoreMemberMembershipOrganizationAuditEntryData](/docusaurus-plugin-content-graphql/github-example/objects#orgrestoremembermembershiporganizationauditentrydata)
- [OrgRestoreMemberMembershipRepositoryAuditEntryData](/docusaurus-plugin-content-graphql/github-example/objects#orgrestoremembermembershiprepositoryauditentrydata)
- [OrgRestoreMemberMembershipTeamAuditEntryData](/docusaurus-plugin-content-graphql/github-example/objects#orgrestoremembermembershipteamauditentrydata)

## PermissionGranter

Types that can grant permissions on a repository to a user

<p style={{ marginBottom: "0.4em" }}><strong>Possible types</strong></p>

- [Organization](/docusaurus-plugin-content-graphql/github-example/objects#organization)
- [Repository](/docusaurus-plugin-content-graphql/github-example/objects#repository)
- [Team](/docusaurus-plugin-content-graphql/github-example/objects#team)

## PinnableItem

Types that can be pinned to a profile page.

<p style={{ marginBottom: "0.4em" }}><strong>Possible types</strong></p>

- [Gist](/docusaurus-plugin-content-graphql/github-example/objects#gist)
- [Repository](/docusaurus-plugin-content-graphql/github-example/objects#repository)

## ProjectCardItem

Types that can be inside Project Cards.

<p style={{ marginBottom: "0.4em" }}><strong>Possible types</strong></p>

- [Issue](/docusaurus-plugin-content-graphql/github-example/objects#issue)
- [PullRequest](/docusaurus-plugin-content-graphql/github-example/objects#pullrequest)

## PullRequestTimelineItem

An item in a pull request timeline

<p style={{ marginBottom: "0.4em" }}><strong>Possible types</strong></p>

- [AssignedEvent](/docusaurus-plugin-content-graphql/github-example/objects#assignedevent)
- [BaseRefDeletedEvent](/docusaurus-plugin-content-graphql/github-example/objects#baserefdeletedevent)
- [BaseRefForcePushedEvent](/docusaurus-plugin-content-graphql/github-example/objects#baserefforcepushedevent)
- [ClosedEvent](/docusaurus-plugin-content-graphql/github-example/objects#closedevent)
- [Commit](/docusaurus-plugin-content-graphql/github-example/objects#commit)
- [CommitCommentThread](/docusaurus-plugin-content-graphql/github-example/objects#commitcommentthread)
- [CrossReferencedEvent](/docusaurus-plugin-content-graphql/github-example/objects#crossreferencedevent)
- [DemilestonedEvent](/docusaurus-plugin-content-graphql/github-example/objects#demilestonedevent)
- [DeployedEvent](/docusaurus-plugin-content-graphql/github-example/objects#deployedevent)
- [DeploymentEnvironmentChangedEvent](/docusaurus-plugin-content-graphql/github-example/objects#deploymentenvironmentchangedevent)
- [HeadRefDeletedEvent](/docusaurus-plugin-content-graphql/github-example/objects#headrefdeletedevent)
- [HeadRefForcePushedEvent](/docusaurus-plugin-content-graphql/github-example/objects#headrefforcepushedevent)
- [HeadRefRestoredEvent](/docusaurus-plugin-content-graphql/github-example/objects#headrefrestoredevent)
- [IssueComment](/docusaurus-plugin-content-graphql/github-example/objects#issuecomment)
- [LabeledEvent](/docusaurus-plugin-content-graphql/github-example/objects#labeledevent)
- [LockedEvent](/docusaurus-plugin-content-graphql/github-example/objects#lockedevent)
- [MergedEvent](/docusaurus-plugin-content-graphql/github-example/objects#mergedevent)
- [MilestonedEvent](/docusaurus-plugin-content-graphql/github-example/objects#milestonedevent)
- [PullRequestReview](/docusaurus-plugin-content-graphql/github-example/objects#pullrequestreview)
- [PullRequestReviewComment](/docusaurus-plugin-content-graphql/github-example/objects#pullrequestreviewcomment)
- [PullRequestReviewThread](/docusaurus-plugin-content-graphql/github-example/objects#pullrequestreviewthread)
- [ReferencedEvent](/docusaurus-plugin-content-graphql/github-example/objects#referencedevent)
- [RenamedTitleEvent](/docusaurus-plugin-content-graphql/github-example/objects#renamedtitleevent)
- [ReopenedEvent](/docusaurus-plugin-content-graphql/github-example/objects#reopenedevent)
- [ReviewDismissedEvent](/docusaurus-plugin-content-graphql/github-example/objects#reviewdismissedevent)
- [ReviewRequestRemovedEvent](/docusaurus-plugin-content-graphql/github-example/objects#reviewrequestremovedevent)
- [ReviewRequestedEvent](/docusaurus-plugin-content-graphql/github-example/objects#reviewrequestedevent)
- [SubscribedEvent](/docusaurus-plugin-content-graphql/github-example/objects#subscribedevent)
- [UnassignedEvent](/docusaurus-plugin-content-graphql/github-example/objects#unassignedevent)
- [UnlabeledEvent](/docusaurus-plugin-content-graphql/github-example/objects#unlabeledevent)
- [UnlockedEvent](/docusaurus-plugin-content-graphql/github-example/objects#unlockedevent)
- [UnsubscribedEvent](/docusaurus-plugin-content-graphql/github-example/objects#unsubscribedevent)
- [UserBlockedEvent](/docusaurus-plugin-content-graphql/github-example/objects#userblockedevent)

## PullRequestTimelineItems

An item in a pull request timeline

<p style={{ marginBottom: "0.4em" }}><strong>Possible types</strong></p>

- [AddedToProjectEvent](/docusaurus-plugin-content-graphql/github-example/objects#addedtoprojectevent)
- [AssignedEvent](/docusaurus-plugin-content-graphql/github-example/objects#assignedevent)
- [AutoMergeDisabledEvent](/docusaurus-plugin-content-graphql/github-example/objects#automergedisabledevent)
- [AutoMergeEnabledEvent](/docusaurus-plugin-content-graphql/github-example/objects#automergeenabledevent)
- [AutoRebaseEnabledEvent](/docusaurus-plugin-content-graphql/github-example/objects#autorebaseenabledevent)
- [AutoSquashEnabledEvent](/docusaurus-plugin-content-graphql/github-example/objects#autosquashenabledevent)
- [AutomaticBaseChangeFailedEvent](/docusaurus-plugin-content-graphql/github-example/objects#automaticbasechangefailedevent)
- [AutomaticBaseChangeSucceededEvent](/docusaurus-plugin-content-graphql/github-example/objects#automaticbasechangesucceededevent)
- [BaseRefChangedEvent](/docusaurus-plugin-content-graphql/github-example/objects#baserefchangedevent)
- [BaseRefDeletedEvent](/docusaurus-plugin-content-graphql/github-example/objects#baserefdeletedevent)
- [BaseRefForcePushedEvent](/docusaurus-plugin-content-graphql/github-example/objects#baserefforcepushedevent)
- [ClosedEvent](/docusaurus-plugin-content-graphql/github-example/objects#closedevent)
- [CommentDeletedEvent](/docusaurus-plugin-content-graphql/github-example/objects#commentdeletedevent)
- [ConnectedEvent](/docusaurus-plugin-content-graphql/github-example/objects#connectedevent)
- [ConvertToDraftEvent](/docusaurus-plugin-content-graphql/github-example/objects#converttodraftevent)
- [ConvertedNoteToIssueEvent](/docusaurus-plugin-content-graphql/github-example/objects#convertednotetoissueevent)
- [CrossReferencedEvent](/docusaurus-plugin-content-graphql/github-example/objects#crossreferencedevent)
- [DemilestonedEvent](/docusaurus-plugin-content-graphql/github-example/objects#demilestonedevent)
- [DeployedEvent](/docusaurus-plugin-content-graphql/github-example/objects#deployedevent)
- [DeploymentEnvironmentChangedEvent](/docusaurus-plugin-content-graphql/github-example/objects#deploymentenvironmentchangedevent)
- [DisconnectedEvent](/docusaurus-plugin-content-graphql/github-example/objects#disconnectedevent)
- [HeadRefDeletedEvent](/docusaurus-plugin-content-graphql/github-example/objects#headrefdeletedevent)
- [HeadRefForcePushedEvent](/docusaurus-plugin-content-graphql/github-example/objects#headrefforcepushedevent)
- [HeadRefRestoredEvent](/docusaurus-plugin-content-graphql/github-example/objects#headrefrestoredevent)
- [IssueComment](/docusaurus-plugin-content-graphql/github-example/objects#issuecomment)
- [LabeledEvent](/docusaurus-plugin-content-graphql/github-example/objects#labeledevent)
- [LockedEvent](/docusaurus-plugin-content-graphql/github-example/objects#lockedevent)
- [MarkedAsDuplicateEvent](/docusaurus-plugin-content-graphql/github-example/objects#markedasduplicateevent)
- [MentionedEvent](/docusaurus-plugin-content-graphql/github-example/objects#mentionedevent)
- [MergedEvent](/docusaurus-plugin-content-graphql/github-example/objects#mergedevent)
- [MilestonedEvent](/docusaurus-plugin-content-graphql/github-example/objects#milestonedevent)
- [MovedColumnsInProjectEvent](/docusaurus-plugin-content-graphql/github-example/objects#movedcolumnsinprojectevent)
- [PinnedEvent](/docusaurus-plugin-content-graphql/github-example/objects#pinnedevent)
- [PullRequestCommit](/docusaurus-plugin-content-graphql/github-example/objects#pullrequestcommit)
- [PullRequestCommitCommentThread](/docusaurus-plugin-content-graphql/github-example/objects#pullrequestcommitcommentthread)
- [PullRequestReview](/docusaurus-plugin-content-graphql/github-example/objects#pullrequestreview)
- [PullRequestReviewThread](/docusaurus-plugin-content-graphql/github-example/objects#pullrequestreviewthread)
- [PullRequestRevisionMarker](/docusaurus-plugin-content-graphql/github-example/objects#pullrequestrevisionmarker)
- [ReadyForReviewEvent](/docusaurus-plugin-content-graphql/github-example/objects#readyforreviewevent)
- [ReferencedEvent](/docusaurus-plugin-content-graphql/github-example/objects#referencedevent)
- [RemovedFromProjectEvent](/docusaurus-plugin-content-graphql/github-example/objects#removedfromprojectevent)
- [RenamedTitleEvent](/docusaurus-plugin-content-graphql/github-example/objects#renamedtitleevent)
- [ReopenedEvent](/docusaurus-plugin-content-graphql/github-example/objects#reopenedevent)
- [ReviewDismissedEvent](/docusaurus-plugin-content-graphql/github-example/objects#reviewdismissedevent)
- [ReviewRequestRemovedEvent](/docusaurus-plugin-content-graphql/github-example/objects#reviewrequestremovedevent)
- [ReviewRequestedEvent](/docusaurus-plugin-content-graphql/github-example/objects#reviewrequestedevent)
- [SubscribedEvent](/docusaurus-plugin-content-graphql/github-example/objects#subscribedevent)
- [TransferredEvent](/docusaurus-plugin-content-graphql/github-example/objects#transferredevent)
- [UnassignedEvent](/docusaurus-plugin-content-graphql/github-example/objects#unassignedevent)
- [UnlabeledEvent](/docusaurus-plugin-content-graphql/github-example/objects#unlabeledevent)
- [UnlockedEvent](/docusaurus-plugin-content-graphql/github-example/objects#unlockedevent)
- [UnmarkedAsDuplicateEvent](/docusaurus-plugin-content-graphql/github-example/objects#unmarkedasduplicateevent)
- [UnpinnedEvent](/docusaurus-plugin-content-graphql/github-example/objects#unpinnedevent)
- [UnsubscribedEvent](/docusaurus-plugin-content-graphql/github-example/objects#unsubscribedevent)
- [UserBlockedEvent](/docusaurus-plugin-content-graphql/github-example/objects#userblockedevent)

## PushAllowanceActor

Types that can be an actor.

<p style={{ marginBottom: "0.4em" }}><strong>Possible types</strong></p>

- [App](/docusaurus-plugin-content-graphql/github-example/objects#app)
- [Team](/docusaurus-plugin-content-graphql/github-example/objects#team)
- [User](/docusaurus-plugin-content-graphql/github-example/objects#user)

## ReferencedSubject

Any referencable object

<p style={{ marginBottom: "0.4em" }}><strong>Possible types</strong></p>

- [Issue](/docusaurus-plugin-content-graphql/github-example/objects#issue)
- [PullRequest](/docusaurus-plugin-content-graphql/github-example/objects#pullrequest)

## RenamedTitleSubject

An object which has a renamable title

<p style={{ marginBottom: "0.4em" }}><strong>Possible types</strong></p>

- [Issue](/docusaurus-plugin-content-graphql/github-example/objects#issue)
- [PullRequest](/docusaurus-plugin-content-graphql/github-example/objects#pullrequest)

## RequestedReviewer

Types that can be requested reviewers.

<p style={{ marginBottom: "0.4em" }}><strong>Possible types</strong></p>

- [Mannequin](/docusaurus-plugin-content-graphql/github-example/objects#mannequin)
- [Team](/docusaurus-plugin-content-graphql/github-example/objects#team)
- [User](/docusaurus-plugin-content-graphql/github-example/objects#user)

## ReviewDismissalAllowanceActor

Types that can be an actor.

<p style={{ marginBottom: "0.4em" }}><strong>Possible types</strong></p>

- [Team](/docusaurus-plugin-content-graphql/github-example/objects#team)
- [User](/docusaurus-plugin-content-graphql/github-example/objects#user)

## SearchResultItem

The results of a search.

<p style={{ marginBottom: "0.4em" }}><strong>Possible types</strong></p>

- [App](/docusaurus-plugin-content-graphql/github-example/objects#app)
- [Issue](/docusaurus-plugin-content-graphql/github-example/objects#issue)
- [MarketplaceListing](/docusaurus-plugin-content-graphql/github-example/objects#marketplacelisting)
- [Organization](/docusaurus-plugin-content-graphql/github-example/objects#organization)
- [PullRequest](/docusaurus-plugin-content-graphql/github-example/objects#pullrequest)
- [Repository](/docusaurus-plugin-content-graphql/github-example/objects#repository)
- [User](/docusaurus-plugin-content-graphql/github-example/objects#user)

## Sponsor

Entities that can sponsor others via GitHub Sponsors

<p style={{ marginBottom: "0.4em" }}><strong>Possible types</strong></p>

- [Organization](/docusaurus-plugin-content-graphql/github-example/objects#organization)
- [User](/docusaurus-plugin-content-graphql/github-example/objects#user)

## SponsorableItem

Entities that can be sponsored via GitHub Sponsors

<p style={{ marginBottom: "0.4em" }}><strong>Possible types</strong></p>

- [Organization](/docusaurus-plugin-content-graphql/github-example/objects#organization)
- [User](/docusaurus-plugin-content-graphql/github-example/objects#user)

## StatusCheckRollupContext

Types that can be inside a StatusCheckRollup context.

<p style={{ marginBottom: "0.4em" }}><strong>Possible types</strong></p>

- [CheckRun](/docusaurus-plugin-content-graphql/github-example/objects#checkrun)
- [StatusContext](/docusaurus-plugin-content-graphql/github-example/objects#statuscontext)

## VerifiableDomainOwner

Types that can own a verifiable domain.

<p style={{ marginBottom: "0.4em" }}><strong>Possible types</strong></p>

- [Enterprise](/docusaurus-plugin-content-graphql/github-example/objects#enterprise)
- [Organization](/docusaurus-plugin-content-graphql/github-example/objects#organization)

