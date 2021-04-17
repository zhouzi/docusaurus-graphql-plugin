---
id: unions
title: Unions
slug: unions
---

## Assignee

Types that can be assigned to issues.

<p style={{ marginBottom: "0.4em" }}><strong>Possible types</strong></p>

- [Bot](/docusaurus-graphql-plugin/github-example/objects#bot)
- [Mannequin](/docusaurus-graphql-plugin/github-example/objects#mannequin)
- [Organization](/docusaurus-graphql-plugin/github-example/objects#organization)
- [User](/docusaurus-graphql-plugin/github-example/objects#user)

## AuditEntryActor

Types that can initiate an audit log event.

<p style={{ marginBottom: "0.4em" }}><strong>Possible types</strong></p>

- [Bot](/docusaurus-graphql-plugin/github-example/objects#bot)
- [Organization](/docusaurus-graphql-plugin/github-example/objects#organization)
- [User](/docusaurus-graphql-plugin/github-example/objects#user)

## Closer

The object which triggered a `ClosedEvent`.

<p style={{ marginBottom: "0.4em" }}><strong>Possible types</strong></p>

- [Commit](/docusaurus-graphql-plugin/github-example/objects#commit)
- [PullRequest](/docusaurus-graphql-plugin/github-example/objects#pullrequest)

## CreatedIssueOrRestrictedContribution

Represents either a issue the viewer can access or a restricted contribution.

<p style={{ marginBottom: "0.4em" }}><strong>Possible types</strong></p>

- [CreatedIssueContribution](/docusaurus-graphql-plugin/github-example/objects#createdissuecontribution)
- [RestrictedContribution](/docusaurus-graphql-plugin/github-example/objects#restrictedcontribution)

## CreatedPullRequestOrRestrictedContribution

Represents either a pull request the viewer can access or a restricted contribution.

<p style={{ marginBottom: "0.4em" }}><strong>Possible types</strong></p>

- [CreatedPullRequestContribution](/docusaurus-graphql-plugin/github-example/objects#createdpullrequestcontribution)
- [RestrictedContribution](/docusaurus-graphql-plugin/github-example/objects#restrictedcontribution)

## CreatedRepositoryOrRestrictedContribution

Represents either a repository the viewer can access or a restricted contribution.

<p style={{ marginBottom: "0.4em" }}><strong>Possible types</strong></p>

- [CreatedRepositoryContribution](/docusaurus-graphql-plugin/github-example/objects#createdrepositorycontribution)
- [RestrictedContribution](/docusaurus-graphql-plugin/github-example/objects#restrictedcontribution)

## EnterpriseMember

An object that is a member of an enterprise.

<p style={{ marginBottom: "0.4em" }}><strong>Possible types</strong></p>

- [EnterpriseUserAccount](/docusaurus-graphql-plugin/github-example/objects#enterpriseuseraccount)
- [User](/docusaurus-graphql-plugin/github-example/objects#user)

## IpAllowListOwner

Types that can own an IP allow list.

<p style={{ marginBottom: "0.4em" }}><strong>Possible types</strong></p>

- [Enterprise](/docusaurus-graphql-plugin/github-example/objects#enterprise)
- [Organization](/docusaurus-graphql-plugin/github-example/objects#organization)

## IssueOrPullRequest

Used for return value of Repository.issueOrPullRequest.

<p style={{ marginBottom: "0.4em" }}><strong>Possible types</strong></p>

- [Issue](/docusaurus-graphql-plugin/github-example/objects#issue)
- [PullRequest](/docusaurus-graphql-plugin/github-example/objects#pullrequest)

## IssueTimelineItem

An item in an issue timeline

<p style={{ marginBottom: "0.4em" }}><strong>Possible types</strong></p>

- [AssignedEvent](/docusaurus-graphql-plugin/github-example/objects#assignedevent)
- [ClosedEvent](/docusaurus-graphql-plugin/github-example/objects#closedevent)
- [Commit](/docusaurus-graphql-plugin/github-example/objects#commit)
- [CrossReferencedEvent](/docusaurus-graphql-plugin/github-example/objects#crossreferencedevent)
- [DemilestonedEvent](/docusaurus-graphql-plugin/github-example/objects#demilestonedevent)
- [IssueComment](/docusaurus-graphql-plugin/github-example/objects#issuecomment)
- [LabeledEvent](/docusaurus-graphql-plugin/github-example/objects#labeledevent)
- [LockedEvent](/docusaurus-graphql-plugin/github-example/objects#lockedevent)
- [MilestonedEvent](/docusaurus-graphql-plugin/github-example/objects#milestonedevent)
- [ReferencedEvent](/docusaurus-graphql-plugin/github-example/objects#referencedevent)
- [RenamedTitleEvent](/docusaurus-graphql-plugin/github-example/objects#renamedtitleevent)
- [ReopenedEvent](/docusaurus-graphql-plugin/github-example/objects#reopenedevent)
- [SubscribedEvent](/docusaurus-graphql-plugin/github-example/objects#subscribedevent)
- [TransferredEvent](/docusaurus-graphql-plugin/github-example/objects#transferredevent)
- [UnassignedEvent](/docusaurus-graphql-plugin/github-example/objects#unassignedevent)
- [UnlabeledEvent](/docusaurus-graphql-plugin/github-example/objects#unlabeledevent)
- [UnlockedEvent](/docusaurus-graphql-plugin/github-example/objects#unlockedevent)
- [UnsubscribedEvent](/docusaurus-graphql-plugin/github-example/objects#unsubscribedevent)
- [UserBlockedEvent](/docusaurus-graphql-plugin/github-example/objects#userblockedevent)

## IssueTimelineItems

An item in an issue timeline

<p style={{ marginBottom: "0.4em" }}><strong>Possible types</strong></p>

- [AddedToProjectEvent](/docusaurus-graphql-plugin/github-example/objects#addedtoprojectevent)
- [AssignedEvent](/docusaurus-graphql-plugin/github-example/objects#assignedevent)
- [ClosedEvent](/docusaurus-graphql-plugin/github-example/objects#closedevent)
- [CommentDeletedEvent](/docusaurus-graphql-plugin/github-example/objects#commentdeletedevent)
- [ConnectedEvent](/docusaurus-graphql-plugin/github-example/objects#connectedevent)
- [ConvertedNoteToIssueEvent](/docusaurus-graphql-plugin/github-example/objects#convertednotetoissueevent)
- [CrossReferencedEvent](/docusaurus-graphql-plugin/github-example/objects#crossreferencedevent)
- [DemilestonedEvent](/docusaurus-graphql-plugin/github-example/objects#demilestonedevent)
- [DisconnectedEvent](/docusaurus-graphql-plugin/github-example/objects#disconnectedevent)
- [IssueComment](/docusaurus-graphql-plugin/github-example/objects#issuecomment)
- [LabeledEvent](/docusaurus-graphql-plugin/github-example/objects#labeledevent)
- [LockedEvent](/docusaurus-graphql-plugin/github-example/objects#lockedevent)
- [MarkedAsDuplicateEvent](/docusaurus-graphql-plugin/github-example/objects#markedasduplicateevent)
- [MentionedEvent](/docusaurus-graphql-plugin/github-example/objects#mentionedevent)
- [MilestonedEvent](/docusaurus-graphql-plugin/github-example/objects#milestonedevent)
- [MovedColumnsInProjectEvent](/docusaurus-graphql-plugin/github-example/objects#movedcolumnsinprojectevent)
- [PinnedEvent](/docusaurus-graphql-plugin/github-example/objects#pinnedevent)
- [ReferencedEvent](/docusaurus-graphql-plugin/github-example/objects#referencedevent)
- [RemovedFromProjectEvent](/docusaurus-graphql-plugin/github-example/objects#removedfromprojectevent)
- [RenamedTitleEvent](/docusaurus-graphql-plugin/github-example/objects#renamedtitleevent)
- [ReopenedEvent](/docusaurus-graphql-plugin/github-example/objects#reopenedevent)
- [SubscribedEvent](/docusaurus-graphql-plugin/github-example/objects#subscribedevent)
- [TransferredEvent](/docusaurus-graphql-plugin/github-example/objects#transferredevent)
- [UnassignedEvent](/docusaurus-graphql-plugin/github-example/objects#unassignedevent)
- [UnlabeledEvent](/docusaurus-graphql-plugin/github-example/objects#unlabeledevent)
- [UnlockedEvent](/docusaurus-graphql-plugin/github-example/objects#unlockedevent)
- [UnmarkedAsDuplicateEvent](/docusaurus-graphql-plugin/github-example/objects#unmarkedasduplicateevent)
- [UnpinnedEvent](/docusaurus-graphql-plugin/github-example/objects#unpinnedevent)
- [UnsubscribedEvent](/docusaurus-graphql-plugin/github-example/objects#unsubscribedevent)
- [UserBlockedEvent](/docusaurus-graphql-plugin/github-example/objects#userblockedevent)

## MilestoneItem

Types that can be inside a Milestone.

<p style={{ marginBottom: "0.4em" }}><strong>Possible types</strong></p>

- [Issue](/docusaurus-graphql-plugin/github-example/objects#issue)
- [PullRequest](/docusaurus-graphql-plugin/github-example/objects#pullrequest)

## OrganizationAuditEntry

An audit entry in an organization audit log.

<p style={{ marginBottom: "0.4em" }}><strong>Possible types</strong></p>

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

## OrgRestoreMemberAuditEntryMembership

Types of memberships that can be restored for an Organization member.

<p style={{ marginBottom: "0.4em" }}><strong>Possible types</strong></p>

- [OrgRestoreMemberMembershipOrganizationAuditEntryData](/docusaurus-graphql-plugin/github-example/objects#orgrestoremembermembershiporganizationauditentrydata)
- [OrgRestoreMemberMembershipRepositoryAuditEntryData](/docusaurus-graphql-plugin/github-example/objects#orgrestoremembermembershiprepositoryauditentrydata)
- [OrgRestoreMemberMembershipTeamAuditEntryData](/docusaurus-graphql-plugin/github-example/objects#orgrestoremembermembershipteamauditentrydata)

## PermissionGranter

Types that can grant permissions on a repository to a user

<p style={{ marginBottom: "0.4em" }}><strong>Possible types</strong></p>

- [Organization](/docusaurus-graphql-plugin/github-example/objects#organization)
- [Repository](/docusaurus-graphql-plugin/github-example/objects#repository)
- [Team](/docusaurus-graphql-plugin/github-example/objects#team)

## PinnableItem

Types that can be pinned to a profile page.

<p style={{ marginBottom: "0.4em" }}><strong>Possible types</strong></p>

- [Gist](/docusaurus-graphql-plugin/github-example/objects#gist)
- [Repository](/docusaurus-graphql-plugin/github-example/objects#repository)

## ProjectCardItem

Types that can be inside Project Cards.

<p style={{ marginBottom: "0.4em" }}><strong>Possible types</strong></p>

- [Issue](/docusaurus-graphql-plugin/github-example/objects#issue)
- [PullRequest](/docusaurus-graphql-plugin/github-example/objects#pullrequest)

## PullRequestTimelineItem

An item in a pull request timeline

<p style={{ marginBottom: "0.4em" }}><strong>Possible types</strong></p>

- [AssignedEvent](/docusaurus-graphql-plugin/github-example/objects#assignedevent)
- [BaseRefDeletedEvent](/docusaurus-graphql-plugin/github-example/objects#baserefdeletedevent)
- [BaseRefForcePushedEvent](/docusaurus-graphql-plugin/github-example/objects#baserefforcepushedevent)
- [ClosedEvent](/docusaurus-graphql-plugin/github-example/objects#closedevent)
- [Commit](/docusaurus-graphql-plugin/github-example/objects#commit)
- [CommitCommentThread](/docusaurus-graphql-plugin/github-example/objects#commitcommentthread)
- [CrossReferencedEvent](/docusaurus-graphql-plugin/github-example/objects#crossreferencedevent)
- [DemilestonedEvent](/docusaurus-graphql-plugin/github-example/objects#demilestonedevent)
- [DeployedEvent](/docusaurus-graphql-plugin/github-example/objects#deployedevent)
- [DeploymentEnvironmentChangedEvent](/docusaurus-graphql-plugin/github-example/objects#deploymentenvironmentchangedevent)
- [HeadRefDeletedEvent](/docusaurus-graphql-plugin/github-example/objects#headrefdeletedevent)
- [HeadRefForcePushedEvent](/docusaurus-graphql-plugin/github-example/objects#headrefforcepushedevent)
- [HeadRefRestoredEvent](/docusaurus-graphql-plugin/github-example/objects#headrefrestoredevent)
- [IssueComment](/docusaurus-graphql-plugin/github-example/objects#issuecomment)
- [LabeledEvent](/docusaurus-graphql-plugin/github-example/objects#labeledevent)
- [LockedEvent](/docusaurus-graphql-plugin/github-example/objects#lockedevent)
- [MergedEvent](/docusaurus-graphql-plugin/github-example/objects#mergedevent)
- [MilestonedEvent](/docusaurus-graphql-plugin/github-example/objects#milestonedevent)
- [PullRequestReview](/docusaurus-graphql-plugin/github-example/objects#pullrequestreview)
- [PullRequestReviewComment](/docusaurus-graphql-plugin/github-example/objects#pullrequestreviewcomment)
- [PullRequestReviewThread](/docusaurus-graphql-plugin/github-example/objects#pullrequestreviewthread)
- [ReferencedEvent](/docusaurus-graphql-plugin/github-example/objects#referencedevent)
- [RenamedTitleEvent](/docusaurus-graphql-plugin/github-example/objects#renamedtitleevent)
- [ReopenedEvent](/docusaurus-graphql-plugin/github-example/objects#reopenedevent)
- [ReviewDismissedEvent](/docusaurus-graphql-plugin/github-example/objects#reviewdismissedevent)
- [ReviewRequestRemovedEvent](/docusaurus-graphql-plugin/github-example/objects#reviewrequestremovedevent)
- [ReviewRequestedEvent](/docusaurus-graphql-plugin/github-example/objects#reviewrequestedevent)
- [SubscribedEvent](/docusaurus-graphql-plugin/github-example/objects#subscribedevent)
- [UnassignedEvent](/docusaurus-graphql-plugin/github-example/objects#unassignedevent)
- [UnlabeledEvent](/docusaurus-graphql-plugin/github-example/objects#unlabeledevent)
- [UnlockedEvent](/docusaurus-graphql-plugin/github-example/objects#unlockedevent)
- [UnsubscribedEvent](/docusaurus-graphql-plugin/github-example/objects#unsubscribedevent)
- [UserBlockedEvent](/docusaurus-graphql-plugin/github-example/objects#userblockedevent)

## PullRequestTimelineItems

An item in a pull request timeline

<p style={{ marginBottom: "0.4em" }}><strong>Possible types</strong></p>

- [AddedToProjectEvent](/docusaurus-graphql-plugin/github-example/objects#addedtoprojectevent)
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
- [ClosedEvent](/docusaurus-graphql-plugin/github-example/objects#closedevent)
- [CommentDeletedEvent](/docusaurus-graphql-plugin/github-example/objects#commentdeletedevent)
- [ConnectedEvent](/docusaurus-graphql-plugin/github-example/objects#connectedevent)
- [ConvertToDraftEvent](/docusaurus-graphql-plugin/github-example/objects#converttodraftevent)
- [ConvertedNoteToIssueEvent](/docusaurus-graphql-plugin/github-example/objects#convertednotetoissueevent)
- [CrossReferencedEvent](/docusaurus-graphql-plugin/github-example/objects#crossreferencedevent)
- [DemilestonedEvent](/docusaurus-graphql-plugin/github-example/objects#demilestonedevent)
- [DeployedEvent](/docusaurus-graphql-plugin/github-example/objects#deployedevent)
- [DeploymentEnvironmentChangedEvent](/docusaurus-graphql-plugin/github-example/objects#deploymentenvironmentchangedevent)
- [DisconnectedEvent](/docusaurus-graphql-plugin/github-example/objects#disconnectedevent)
- [HeadRefDeletedEvent](/docusaurus-graphql-plugin/github-example/objects#headrefdeletedevent)
- [HeadRefForcePushedEvent](/docusaurus-graphql-plugin/github-example/objects#headrefforcepushedevent)
- [HeadRefRestoredEvent](/docusaurus-graphql-plugin/github-example/objects#headrefrestoredevent)
- [IssueComment](/docusaurus-graphql-plugin/github-example/objects#issuecomment)
- [LabeledEvent](/docusaurus-graphql-plugin/github-example/objects#labeledevent)
- [LockedEvent](/docusaurus-graphql-plugin/github-example/objects#lockedevent)
- [MarkedAsDuplicateEvent](/docusaurus-graphql-plugin/github-example/objects#markedasduplicateevent)
- [MentionedEvent](/docusaurus-graphql-plugin/github-example/objects#mentionedevent)
- [MergedEvent](/docusaurus-graphql-plugin/github-example/objects#mergedevent)
- [MilestonedEvent](/docusaurus-graphql-plugin/github-example/objects#milestonedevent)
- [MovedColumnsInProjectEvent](/docusaurus-graphql-plugin/github-example/objects#movedcolumnsinprojectevent)
- [PinnedEvent](/docusaurus-graphql-plugin/github-example/objects#pinnedevent)
- [PullRequestCommit](/docusaurus-graphql-plugin/github-example/objects#pullrequestcommit)
- [PullRequestCommitCommentThread](/docusaurus-graphql-plugin/github-example/objects#pullrequestcommitcommentthread)
- [PullRequestReview](/docusaurus-graphql-plugin/github-example/objects#pullrequestreview)
- [PullRequestReviewThread](/docusaurus-graphql-plugin/github-example/objects#pullrequestreviewthread)
- [PullRequestRevisionMarker](/docusaurus-graphql-plugin/github-example/objects#pullrequestrevisionmarker)
- [ReadyForReviewEvent](/docusaurus-graphql-plugin/github-example/objects#readyforreviewevent)
- [ReferencedEvent](/docusaurus-graphql-plugin/github-example/objects#referencedevent)
- [RemovedFromProjectEvent](/docusaurus-graphql-plugin/github-example/objects#removedfromprojectevent)
- [RenamedTitleEvent](/docusaurus-graphql-plugin/github-example/objects#renamedtitleevent)
- [ReopenedEvent](/docusaurus-graphql-plugin/github-example/objects#reopenedevent)
- [ReviewDismissedEvent](/docusaurus-graphql-plugin/github-example/objects#reviewdismissedevent)
- [ReviewRequestRemovedEvent](/docusaurus-graphql-plugin/github-example/objects#reviewrequestremovedevent)
- [ReviewRequestedEvent](/docusaurus-graphql-plugin/github-example/objects#reviewrequestedevent)
- [SubscribedEvent](/docusaurus-graphql-plugin/github-example/objects#subscribedevent)
- [TransferredEvent](/docusaurus-graphql-plugin/github-example/objects#transferredevent)
- [UnassignedEvent](/docusaurus-graphql-plugin/github-example/objects#unassignedevent)
- [UnlabeledEvent](/docusaurus-graphql-plugin/github-example/objects#unlabeledevent)
- [UnlockedEvent](/docusaurus-graphql-plugin/github-example/objects#unlockedevent)
- [UnmarkedAsDuplicateEvent](/docusaurus-graphql-plugin/github-example/objects#unmarkedasduplicateevent)
- [UnpinnedEvent](/docusaurus-graphql-plugin/github-example/objects#unpinnedevent)
- [UnsubscribedEvent](/docusaurus-graphql-plugin/github-example/objects#unsubscribedevent)
- [UserBlockedEvent](/docusaurus-graphql-plugin/github-example/objects#userblockedevent)

## PushAllowanceActor

Types that can be an actor.

<p style={{ marginBottom: "0.4em" }}><strong>Possible types</strong></p>

- [App](/docusaurus-graphql-plugin/github-example/objects#app)
- [Team](/docusaurus-graphql-plugin/github-example/objects#team)
- [User](/docusaurus-graphql-plugin/github-example/objects#user)

## ReferencedSubject

Any referencable object

<p style={{ marginBottom: "0.4em" }}><strong>Possible types</strong></p>

- [Issue](/docusaurus-graphql-plugin/github-example/objects#issue)
- [PullRequest](/docusaurus-graphql-plugin/github-example/objects#pullrequest)

## RenamedTitleSubject

An object which has a renamable title

<p style={{ marginBottom: "0.4em" }}><strong>Possible types</strong></p>

- [Issue](/docusaurus-graphql-plugin/github-example/objects#issue)
- [PullRequest](/docusaurus-graphql-plugin/github-example/objects#pullrequest)

## RequestedReviewer

Types that can be requested reviewers.

<p style={{ marginBottom: "0.4em" }}><strong>Possible types</strong></p>

- [Mannequin](/docusaurus-graphql-plugin/github-example/objects#mannequin)
- [Team](/docusaurus-graphql-plugin/github-example/objects#team)
- [User](/docusaurus-graphql-plugin/github-example/objects#user)

## ReviewDismissalAllowanceActor

Types that can be an actor.

<p style={{ marginBottom: "0.4em" }}><strong>Possible types</strong></p>

- [Team](/docusaurus-graphql-plugin/github-example/objects#team)
- [User](/docusaurus-graphql-plugin/github-example/objects#user)

## SearchResultItem

The results of a search.

<p style={{ marginBottom: "0.4em" }}><strong>Possible types</strong></p>

- [App](/docusaurus-graphql-plugin/github-example/objects#app)
- [Issue](/docusaurus-graphql-plugin/github-example/objects#issue)
- [MarketplaceListing](/docusaurus-graphql-plugin/github-example/objects#marketplacelisting)
- [Organization](/docusaurus-graphql-plugin/github-example/objects#organization)
- [PullRequest](/docusaurus-graphql-plugin/github-example/objects#pullrequest)
- [Repository](/docusaurus-graphql-plugin/github-example/objects#repository)
- [User](/docusaurus-graphql-plugin/github-example/objects#user)

## Sponsor

Entities that can sponsor others via GitHub Sponsors

<p style={{ marginBottom: "0.4em" }}><strong>Possible types</strong></p>

- [Organization](/docusaurus-graphql-plugin/github-example/objects#organization)
- [User](/docusaurus-graphql-plugin/github-example/objects#user)

## SponsorableItem

Entities that can be sponsored via GitHub Sponsors

<p style={{ marginBottom: "0.4em" }}><strong>Possible types</strong></p>

- [Organization](/docusaurus-graphql-plugin/github-example/objects#organization)
- [User](/docusaurus-graphql-plugin/github-example/objects#user)

## StatusCheckRollupContext

Types that can be inside a StatusCheckRollup context.

<p style={{ marginBottom: "0.4em" }}><strong>Possible types</strong></p>

- [CheckRun](/docusaurus-graphql-plugin/github-example/objects#checkrun)
- [StatusContext](/docusaurus-graphql-plugin/github-example/objects#statuscontext)

## VerifiableDomainOwner

Types that can own a verifiable domain.

<p style={{ marginBottom: "0.4em" }}><strong>Possible types</strong></p>

- [Enterprise](/docusaurus-graphql-plugin/github-example/objects#enterprise)
- [Organization](/docusaurus-graphql-plugin/github-example/objects#organization)

