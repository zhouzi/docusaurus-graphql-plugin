---
id: unions
title: Unions
slug: unions
---

## Assignee

Types that can be assigned to issues.

**Possible types**

- [Bot](/github-example/objects#bot)
- [Mannequin](/github-example/objects#mannequin)
- [Organization](/github-example/objects#organization)
- [User](/github-example/objects#user)

## AuditEntryActor

Types that can initiate an audit log event.

**Possible types**

- [Bot](/github-example/objects#bot)
- [Organization](/github-example/objects#organization)
- [User](/github-example/objects#user)

## Closer

The object which triggered a `ClosedEvent`.

**Possible types**

- [Commit](/github-example/objects#commit)
- [PullRequest](/github-example/objects#pullrequest)

## CreatedIssueOrRestrictedContribution

Represents either a issue the viewer can access or a restricted contribution.

**Possible types**

- [CreatedIssueContribution](/github-example/objects#createdissuecontribution)
- [RestrictedContribution](/github-example/objects#restrictedcontribution)

## CreatedPullRequestOrRestrictedContribution

Represents either a pull request the viewer can access or a restricted contribution.

**Possible types**

- [CreatedPullRequestContribution](/github-example/objects#createdpullrequestcontribution)
- [RestrictedContribution](/github-example/objects#restrictedcontribution)

## CreatedRepositoryOrRestrictedContribution

Represents either a repository the viewer can access or a restricted contribution.

**Possible types**

- [CreatedRepositoryContribution](/github-example/objects#createdrepositorycontribution)
- [RestrictedContribution](/github-example/objects#restrictedcontribution)

## EnterpriseMember

An object that is a member of an enterprise.

**Possible types**

- [EnterpriseUserAccount](/github-example/objects#enterpriseuseraccount)
- [User](/github-example/objects#user)

## IpAllowListOwner

Types that can own an IP allow list.

**Possible types**

- [Enterprise](/github-example/objects#enterprise)
- [Organization](/github-example/objects#organization)

## IssueOrPullRequest

Used for return value of Repository.issueOrPullRequest.

**Possible types**

- [Issue](/github-example/objects#issue)
- [PullRequest](/github-example/objects#pullrequest)

## IssueTimelineItem

An item in an issue timeline

**Possible types**

- [AssignedEvent](/github-example/objects#assignedevent)
- [ClosedEvent](/github-example/objects#closedevent)
- [Commit](/github-example/objects#commit)
- [CrossReferencedEvent](/github-example/objects#crossreferencedevent)
- [DemilestonedEvent](/github-example/objects#demilestonedevent)
- [IssueComment](/github-example/objects#issuecomment)
- [LabeledEvent](/github-example/objects#labeledevent)
- [LockedEvent](/github-example/objects#lockedevent)
- [MilestonedEvent](/github-example/objects#milestonedevent)
- [ReferencedEvent](/github-example/objects#referencedevent)
- [RenamedTitleEvent](/github-example/objects#renamedtitleevent)
- [ReopenedEvent](/github-example/objects#reopenedevent)
- [SubscribedEvent](/github-example/objects#subscribedevent)
- [TransferredEvent](/github-example/objects#transferredevent)
- [UnassignedEvent](/github-example/objects#unassignedevent)
- [UnlabeledEvent](/github-example/objects#unlabeledevent)
- [UnlockedEvent](/github-example/objects#unlockedevent)
- [UnsubscribedEvent](/github-example/objects#unsubscribedevent)
- [UserBlockedEvent](/github-example/objects#userblockedevent)

## IssueTimelineItems

An item in an issue timeline

**Possible types**

- [AddedToProjectEvent](/github-example/objects#addedtoprojectevent)
- [AssignedEvent](/github-example/objects#assignedevent)
- [ClosedEvent](/github-example/objects#closedevent)
- [CommentDeletedEvent](/github-example/objects#commentdeletedevent)
- [ConnectedEvent](/github-example/objects#connectedevent)
- [ConvertedNoteToIssueEvent](/github-example/objects#convertednotetoissueevent)
- [CrossReferencedEvent](/github-example/objects#crossreferencedevent)
- [DemilestonedEvent](/github-example/objects#demilestonedevent)
- [DisconnectedEvent](/github-example/objects#disconnectedevent)
- [IssueComment](/github-example/objects#issuecomment)
- [LabeledEvent](/github-example/objects#labeledevent)
- [LockedEvent](/github-example/objects#lockedevent)
- [MarkedAsDuplicateEvent](/github-example/objects#markedasduplicateevent)
- [MentionedEvent](/github-example/objects#mentionedevent)
- [MilestonedEvent](/github-example/objects#milestonedevent)
- [MovedColumnsInProjectEvent](/github-example/objects#movedcolumnsinprojectevent)
- [PinnedEvent](/github-example/objects#pinnedevent)
- [ReferencedEvent](/github-example/objects#referencedevent)
- [RemovedFromProjectEvent](/github-example/objects#removedfromprojectevent)
- [RenamedTitleEvent](/github-example/objects#renamedtitleevent)
- [ReopenedEvent](/github-example/objects#reopenedevent)
- [SubscribedEvent](/github-example/objects#subscribedevent)
- [TransferredEvent](/github-example/objects#transferredevent)
- [UnassignedEvent](/github-example/objects#unassignedevent)
- [UnlabeledEvent](/github-example/objects#unlabeledevent)
- [UnlockedEvent](/github-example/objects#unlockedevent)
- [UnmarkedAsDuplicateEvent](/github-example/objects#unmarkedasduplicateevent)
- [UnpinnedEvent](/github-example/objects#unpinnedevent)
- [UnsubscribedEvent](/github-example/objects#unsubscribedevent)
- [UserBlockedEvent](/github-example/objects#userblockedevent)

## MilestoneItem

Types that can be inside a Milestone.

**Possible types**

- [Issue](/github-example/objects#issue)
- [PullRequest](/github-example/objects#pullrequest)

## OrganizationAuditEntry

An audit entry in an organization audit log.

**Possible types**

- [MembersCanDeleteReposClearAuditEntry](/github-example/objects#memberscandeletereposclearauditentry)
- [MembersCanDeleteReposDisableAuditEntry](/github-example/objects#memberscandeletereposdisableauditentry)
- [MembersCanDeleteReposEnableAuditEntry](/github-example/objects#memberscandeletereposenableauditentry)
- [OauthApplicationCreateAuditEntry](/github-example/objects#oauthapplicationcreateauditentry)
- [OrgAddBillingManagerAuditEntry](/github-example/objects#orgaddbillingmanagerauditentry)
- [OrgAddMemberAuditEntry](/github-example/objects#orgaddmemberauditentry)
- [OrgBlockUserAuditEntry](/github-example/objects#orgblockuserauditentry)
- [OrgConfigDisableCollaboratorsOnlyAuditEntry](/github-example/objects#orgconfigdisablecollaboratorsonlyauditentry)
- [OrgConfigEnableCollaboratorsOnlyAuditEntry](/github-example/objects#orgconfigenablecollaboratorsonlyauditentry)
- [OrgCreateAuditEntry](/github-example/objects#orgcreateauditentry)
- [OrgDisableOauthAppRestrictionsAuditEntry](/github-example/objects#orgdisableoauthapprestrictionsauditentry)
- [OrgDisableSamlAuditEntry](/github-example/objects#orgdisablesamlauditentry)
- [OrgDisableTwoFactorRequirementAuditEntry](/github-example/objects#orgdisabletwofactorrequirementauditentry)
- [OrgEnableOauthAppRestrictionsAuditEntry](/github-example/objects#orgenableoauthapprestrictionsauditentry)
- [OrgEnableSamlAuditEntry](/github-example/objects#orgenablesamlauditentry)
- [OrgEnableTwoFactorRequirementAuditEntry](/github-example/objects#orgenabletwofactorrequirementauditentry)
- [OrgInviteMemberAuditEntry](/github-example/objects#orginvitememberauditentry)
- [OrgInviteToBusinessAuditEntry](/github-example/objects#orginvitetobusinessauditentry)
- [OrgOauthAppAccessApprovedAuditEntry](/github-example/objects#orgoauthappaccessapprovedauditentry)
- [OrgOauthAppAccessDeniedAuditEntry](/github-example/objects#orgoauthappaccessdeniedauditentry)
- [OrgOauthAppAccessRequestedAuditEntry](/github-example/objects#orgoauthappaccessrequestedauditentry)
- [OrgRemoveBillingManagerAuditEntry](/github-example/objects#orgremovebillingmanagerauditentry)
- [OrgRemoveMemberAuditEntry](/github-example/objects#orgremovememberauditentry)
- [OrgRemoveOutsideCollaboratorAuditEntry](/github-example/objects#orgremoveoutsidecollaboratorauditentry)
- [OrgRestoreMemberAuditEntry](/github-example/objects#orgrestorememberauditentry)
- [OrgUnblockUserAuditEntry](/github-example/objects#orgunblockuserauditentry)
- [OrgUpdateDefaultRepositoryPermissionAuditEntry](/github-example/objects#orgupdatedefaultrepositorypermissionauditentry)
- [OrgUpdateMemberAuditEntry](/github-example/objects#orgupdatememberauditentry)
- [OrgUpdateMemberRepositoryCreationPermissionAuditEntry](/github-example/objects#orgupdatememberrepositorycreationpermissionauditentry)
- [OrgUpdateMemberRepositoryInvitationPermissionAuditEntry](/github-example/objects#orgupdatememberrepositoryinvitationpermissionauditentry)
- [PrivateRepositoryForkingDisableAuditEntry](/github-example/objects#privaterepositoryforkingdisableauditentry)
- [PrivateRepositoryForkingEnableAuditEntry](/github-example/objects#privaterepositoryforkingenableauditentry)
- [RepoAccessAuditEntry](/github-example/objects#repoaccessauditentry)
- [RepoAddMemberAuditEntry](/github-example/objects#repoaddmemberauditentry)
- [RepoAddTopicAuditEntry](/github-example/objects#repoaddtopicauditentry)
- [RepoArchivedAuditEntry](/github-example/objects#repoarchivedauditentry)
- [RepoChangeMergeSettingAuditEntry](/github-example/objects#repochangemergesettingauditentry)
- [RepoConfigDisableAnonymousGitAccessAuditEntry](/github-example/objects#repoconfigdisableanonymousgitaccessauditentry)
- [RepoConfigDisableCollaboratorsOnlyAuditEntry](/github-example/objects#repoconfigdisablecollaboratorsonlyauditentry)
- [RepoConfigDisableContributorsOnlyAuditEntry](/github-example/objects#repoconfigdisablecontributorsonlyauditentry)
- [RepoConfigDisableSockpuppetDisallowedAuditEntry](/github-example/objects#repoconfigdisablesockpuppetdisallowedauditentry)
- [RepoConfigEnableAnonymousGitAccessAuditEntry](/github-example/objects#repoconfigenableanonymousgitaccessauditentry)
- [RepoConfigEnableCollaboratorsOnlyAuditEntry](/github-example/objects#repoconfigenablecollaboratorsonlyauditentry)
- [RepoConfigEnableContributorsOnlyAuditEntry](/github-example/objects#repoconfigenablecontributorsonlyauditentry)
- [RepoConfigEnableSockpuppetDisallowedAuditEntry](/github-example/objects#repoconfigenablesockpuppetdisallowedauditentry)
- [RepoConfigLockAnonymousGitAccessAuditEntry](/github-example/objects#repoconfiglockanonymousgitaccessauditentry)
- [RepoConfigUnlockAnonymousGitAccessAuditEntry](/github-example/objects#repoconfigunlockanonymousgitaccessauditentry)
- [RepoCreateAuditEntry](/github-example/objects#repocreateauditentry)
- [RepoDestroyAuditEntry](/github-example/objects#repodestroyauditentry)
- [RepoRemoveMemberAuditEntry](/github-example/objects#reporemovememberauditentry)
- [RepoRemoveTopicAuditEntry](/github-example/objects#reporemovetopicauditentry)
- [RepositoryVisibilityChangeDisableAuditEntry](/github-example/objects#repositoryvisibilitychangedisableauditentry)
- [RepositoryVisibilityChangeEnableAuditEntry](/github-example/objects#repositoryvisibilitychangeenableauditentry)
- [TeamAddMemberAuditEntry](/github-example/objects#teamaddmemberauditentry)
- [TeamAddRepositoryAuditEntry](/github-example/objects#teamaddrepositoryauditentry)
- [TeamChangeParentTeamAuditEntry](/github-example/objects#teamchangeparentteamauditentry)
- [TeamRemoveMemberAuditEntry](/github-example/objects#teamremovememberauditentry)
- [TeamRemoveRepositoryAuditEntry](/github-example/objects#teamremoverepositoryauditentry)

## OrgRestoreMemberAuditEntryMembership

Types of memberships that can be restored for an Organization member.

**Possible types**

- [OrgRestoreMemberMembershipOrganizationAuditEntryData](/github-example/objects#orgrestoremembermembershiporganizationauditentrydata)
- [OrgRestoreMemberMembershipRepositoryAuditEntryData](/github-example/objects#orgrestoremembermembershiprepositoryauditentrydata)
- [OrgRestoreMemberMembershipTeamAuditEntryData](/github-example/objects#orgrestoremembermembershipteamauditentrydata)

## PermissionGranter

Types that can grant permissions on a repository to a user

**Possible types**

- [Organization](/github-example/objects#organization)
- [Repository](/github-example/objects#repository)
- [Team](/github-example/objects#team)

## PinnableItem

Types that can be pinned to a profile page.

**Possible types**

- [Gist](/github-example/objects#gist)
- [Repository](/github-example/objects#repository)

## ProjectCardItem

Types that can be inside Project Cards.

**Possible types**

- [Issue](/github-example/objects#issue)
- [PullRequest](/github-example/objects#pullrequest)

## PullRequestTimelineItem

An item in a pull request timeline

**Possible types**

- [AssignedEvent](/github-example/objects#assignedevent)
- [BaseRefDeletedEvent](/github-example/objects#baserefdeletedevent)
- [BaseRefForcePushedEvent](/github-example/objects#baserefforcepushedevent)
- [ClosedEvent](/github-example/objects#closedevent)
- [Commit](/github-example/objects#commit)
- [CommitCommentThread](/github-example/objects#commitcommentthread)
- [CrossReferencedEvent](/github-example/objects#crossreferencedevent)
- [DemilestonedEvent](/github-example/objects#demilestonedevent)
- [DeployedEvent](/github-example/objects#deployedevent)
- [DeploymentEnvironmentChangedEvent](/github-example/objects#deploymentenvironmentchangedevent)
- [HeadRefDeletedEvent](/github-example/objects#headrefdeletedevent)
- [HeadRefForcePushedEvent](/github-example/objects#headrefforcepushedevent)
- [HeadRefRestoredEvent](/github-example/objects#headrefrestoredevent)
- [IssueComment](/github-example/objects#issuecomment)
- [LabeledEvent](/github-example/objects#labeledevent)
- [LockedEvent](/github-example/objects#lockedevent)
- [MergedEvent](/github-example/objects#mergedevent)
- [MilestonedEvent](/github-example/objects#milestonedevent)
- [PullRequestReview](/github-example/objects#pullrequestreview)
- [PullRequestReviewComment](/github-example/objects#pullrequestreviewcomment)
- [PullRequestReviewThread](/github-example/objects#pullrequestreviewthread)
- [ReferencedEvent](/github-example/objects#referencedevent)
- [RenamedTitleEvent](/github-example/objects#renamedtitleevent)
- [ReopenedEvent](/github-example/objects#reopenedevent)
- [ReviewDismissedEvent](/github-example/objects#reviewdismissedevent)
- [ReviewRequestRemovedEvent](/github-example/objects#reviewrequestremovedevent)
- [ReviewRequestedEvent](/github-example/objects#reviewrequestedevent)
- [SubscribedEvent](/github-example/objects#subscribedevent)
- [UnassignedEvent](/github-example/objects#unassignedevent)
- [UnlabeledEvent](/github-example/objects#unlabeledevent)
- [UnlockedEvent](/github-example/objects#unlockedevent)
- [UnsubscribedEvent](/github-example/objects#unsubscribedevent)
- [UserBlockedEvent](/github-example/objects#userblockedevent)

## PullRequestTimelineItems

An item in a pull request timeline

**Possible types**

- [AddedToProjectEvent](/github-example/objects#addedtoprojectevent)
- [AssignedEvent](/github-example/objects#assignedevent)
- [AutoMergeDisabledEvent](/github-example/objects#automergedisabledevent)
- [AutoMergeEnabledEvent](/github-example/objects#automergeenabledevent)
- [AutoRebaseEnabledEvent](/github-example/objects#autorebaseenabledevent)
- [AutoSquashEnabledEvent](/github-example/objects#autosquashenabledevent)
- [AutomaticBaseChangeFailedEvent](/github-example/objects#automaticbasechangefailedevent)
- [AutomaticBaseChangeSucceededEvent](/github-example/objects#automaticbasechangesucceededevent)
- [BaseRefChangedEvent](/github-example/objects#baserefchangedevent)
- [BaseRefDeletedEvent](/github-example/objects#baserefdeletedevent)
- [BaseRefForcePushedEvent](/github-example/objects#baserefforcepushedevent)
- [ClosedEvent](/github-example/objects#closedevent)
- [CommentDeletedEvent](/github-example/objects#commentdeletedevent)
- [ConnectedEvent](/github-example/objects#connectedevent)
- [ConvertToDraftEvent](/github-example/objects#converttodraftevent)
- [ConvertedNoteToIssueEvent](/github-example/objects#convertednotetoissueevent)
- [CrossReferencedEvent](/github-example/objects#crossreferencedevent)
- [DemilestonedEvent](/github-example/objects#demilestonedevent)
- [DeployedEvent](/github-example/objects#deployedevent)
- [DeploymentEnvironmentChangedEvent](/github-example/objects#deploymentenvironmentchangedevent)
- [DisconnectedEvent](/github-example/objects#disconnectedevent)
- [HeadRefDeletedEvent](/github-example/objects#headrefdeletedevent)
- [HeadRefForcePushedEvent](/github-example/objects#headrefforcepushedevent)
- [HeadRefRestoredEvent](/github-example/objects#headrefrestoredevent)
- [IssueComment](/github-example/objects#issuecomment)
- [LabeledEvent](/github-example/objects#labeledevent)
- [LockedEvent](/github-example/objects#lockedevent)
- [MarkedAsDuplicateEvent](/github-example/objects#markedasduplicateevent)
- [MentionedEvent](/github-example/objects#mentionedevent)
- [MergedEvent](/github-example/objects#mergedevent)
- [MilestonedEvent](/github-example/objects#milestonedevent)
- [MovedColumnsInProjectEvent](/github-example/objects#movedcolumnsinprojectevent)
- [PinnedEvent](/github-example/objects#pinnedevent)
- [PullRequestCommit](/github-example/objects#pullrequestcommit)
- [PullRequestCommitCommentThread](/github-example/objects#pullrequestcommitcommentthread)
- [PullRequestReview](/github-example/objects#pullrequestreview)
- [PullRequestReviewThread](/github-example/objects#pullrequestreviewthread)
- [PullRequestRevisionMarker](/github-example/objects#pullrequestrevisionmarker)
- [ReadyForReviewEvent](/github-example/objects#readyforreviewevent)
- [ReferencedEvent](/github-example/objects#referencedevent)
- [RemovedFromProjectEvent](/github-example/objects#removedfromprojectevent)
- [RenamedTitleEvent](/github-example/objects#renamedtitleevent)
- [ReopenedEvent](/github-example/objects#reopenedevent)
- [ReviewDismissedEvent](/github-example/objects#reviewdismissedevent)
- [ReviewRequestRemovedEvent](/github-example/objects#reviewrequestremovedevent)
- [ReviewRequestedEvent](/github-example/objects#reviewrequestedevent)
- [SubscribedEvent](/github-example/objects#subscribedevent)
- [TransferredEvent](/github-example/objects#transferredevent)
- [UnassignedEvent](/github-example/objects#unassignedevent)
- [UnlabeledEvent](/github-example/objects#unlabeledevent)
- [UnlockedEvent](/github-example/objects#unlockedevent)
- [UnmarkedAsDuplicateEvent](/github-example/objects#unmarkedasduplicateevent)
- [UnpinnedEvent](/github-example/objects#unpinnedevent)
- [UnsubscribedEvent](/github-example/objects#unsubscribedevent)
- [UserBlockedEvent](/github-example/objects#userblockedevent)

## PushAllowanceActor

Types that can be an actor.

**Possible types**

- [App](/github-example/objects#app)
- [Team](/github-example/objects#team)
- [User](/github-example/objects#user)

## ReferencedSubject

Any referencable object

**Possible types**

- [Issue](/github-example/objects#issue)
- [PullRequest](/github-example/objects#pullrequest)

## RenamedTitleSubject

An object which has a renamable title

**Possible types**

- [Issue](/github-example/objects#issue)
- [PullRequest](/github-example/objects#pullrequest)

## RequestedReviewer

Types that can be requested reviewers.

**Possible types**

- [Mannequin](/github-example/objects#mannequin)
- [Team](/github-example/objects#team)
- [User](/github-example/objects#user)

## ReviewDismissalAllowanceActor

Types that can be an actor.

**Possible types**

- [Team](/github-example/objects#team)
- [User](/github-example/objects#user)

## SearchResultItem

The results of a search.

**Possible types**

- [App](/github-example/objects#app)
- [Issue](/github-example/objects#issue)
- [MarketplaceListing](/github-example/objects#marketplacelisting)
- [Organization](/github-example/objects#organization)
- [PullRequest](/github-example/objects#pullrequest)
- [Repository](/github-example/objects#repository)
- [User](/github-example/objects#user)

## Sponsor

Entities that can sponsor others via GitHub Sponsors

**Possible types**

- [Organization](/github-example/objects#organization)
- [User](/github-example/objects#user)

## SponsorableItem

Entities that can be sponsored via GitHub Sponsors

**Possible types**

- [Organization](/github-example/objects#organization)
- [User](/github-example/objects#user)

## StatusCheckRollupContext

Types that can be inside a StatusCheckRollup context.

**Possible types**

- [CheckRun](/github-example/objects#checkrun)
- [StatusContext](/github-example/objects#statuscontext)

## VerifiableDomainOwner

Types that can own a verifiable domain.

**Possible types**

- [Enterprise](/github-example/objects#enterprise)
- [Organization](/github-example/objects#organization)

