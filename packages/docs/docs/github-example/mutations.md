---
id: mutations
title: Mutations
slug: mutations
---

## acceptEnterpriseAdministratorInvitation

**Type:** [AcceptEnterpriseAdministratorInvitationPayload](/github-example/objects#acceptenterpriseadministratorinvitationpayload)

Accepts a pending invitation for a user to become an administrator of an enterprise.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#acceptenterpriseadministratorinvitationinput"><code>AcceptEnterpriseAdministratorInvitationInput!</code></a></td>
<td>
<p>Parameters for AcceptEnterpriseAdministratorInvitation</p>
</td>
</tr>
</tbody>
</table>

## acceptTopicSuggestion

**Type:** [AcceptTopicSuggestionPayload](/github-example/objects#accepttopicsuggestionpayload)

Applies a suggested topic to the repository.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#accepttopicsuggestioninput"><code>AcceptTopicSuggestionInput!</code></a></td>
<td>
<p>Parameters for AcceptTopicSuggestion</p>
</td>
</tr>
</tbody>
</table>

## addAssigneesToAssignable

**Type:** [AddAssigneesToAssignablePayload](/github-example/objects#addassigneestoassignablepayload)

Adds assignees to an assignable object.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#addassigneestoassignableinput"><code>AddAssigneesToAssignableInput!</code></a></td>
<td>
<p>Parameters for AddAssigneesToAssignable</p>
</td>
</tr>
</tbody>
</table>

## addComment

**Type:** [AddCommentPayload](/github-example/objects#addcommentpayload)

Adds a comment to an Issue or Pull Request.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#addcommentinput"><code>AddCommentInput!</code></a></td>
<td>
<p>Parameters for AddComment</p>
</td>
</tr>
</tbody>
</table>

## addEnterpriseSupportEntitlement

**Type:** [AddEnterpriseSupportEntitlementPayload](/github-example/objects#addenterprisesupportentitlementpayload)

Adds a support entitlement to an enterprise member.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#addenterprisesupportentitlementinput"><code>AddEnterpriseSupportEntitlementInput!</code></a></td>
<td>
<p>Parameters for AddEnterpriseSupportEntitlement</p>
</td>
</tr>
</tbody>
</table>

## addLabelsToLabelable

**Type:** [AddLabelsToLabelablePayload](/github-example/objects#addlabelstolabelablepayload)

Adds labels to a labelable object.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#addlabelstolabelableinput"><code>AddLabelsToLabelableInput!</code></a></td>
<td>
<p>Parameters for AddLabelsToLabelable</p>
</td>
</tr>
</tbody>
</table>

## addProjectCard

**Type:** [AddProjectCardPayload](/github-example/objects#addprojectcardpayload)

Adds a card to a ProjectColumn. Either `contentId` or `note` must be provided but **not** both.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#addprojectcardinput"><code>AddProjectCardInput!</code></a></td>
<td>
<p>Parameters for AddProjectCard</p>
</td>
</tr>
</tbody>
</table>

## addProjectColumn

**Type:** [AddProjectColumnPayload](/github-example/objects#addprojectcolumnpayload)

Adds a column to a Project.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#addprojectcolumninput"><code>AddProjectColumnInput!</code></a></td>
<td>
<p>Parameters for AddProjectColumn</p>
</td>
</tr>
</tbody>
</table>

## addPullRequestReview

**Type:** [AddPullRequestReviewPayload](/github-example/objects#addpullrequestreviewpayload)

Adds a review to a Pull Request.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#addpullrequestreviewinput"><code>AddPullRequestReviewInput!</code></a></td>
<td>
<p>Parameters for AddPullRequestReview</p>
</td>
</tr>
</tbody>
</table>

## addPullRequestReviewComment

**Type:** [AddPullRequestReviewCommentPayload](/github-example/objects#addpullrequestreviewcommentpayload)

Adds a comment to a review.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#addpullrequestreviewcommentinput"><code>AddPullRequestReviewCommentInput!</code></a></td>
<td>
<p>Parameters for AddPullRequestReviewComment</p>
</td>
</tr>
</tbody>
</table>

## addPullRequestReviewThread

**Type:** [AddPullRequestReviewThreadPayload](/github-example/objects#addpullrequestreviewthreadpayload)

Adds a new thread to a pending Pull Request Review.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#addpullrequestreviewthreadinput"><code>AddPullRequestReviewThreadInput!</code></a></td>
<td>
<p>Parameters for AddPullRequestReviewThread</p>
</td>
</tr>
</tbody>
</table>

## addReaction

**Type:** [AddReactionPayload](/github-example/objects#addreactionpayload)

Adds a reaction to a subject.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#addreactioninput"><code>AddReactionInput!</code></a></td>
<td>
<p>Parameters for AddReaction</p>
</td>
</tr>
</tbody>
</table>

## addStar

**Type:** [AddStarPayload](/github-example/objects#addstarpayload)

Adds a star to a Starrable.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#addstarinput"><code>AddStarInput!</code></a></td>
<td>
<p>Parameters for AddStar</p>
</td>
</tr>
</tbody>
</table>

## addVerifiableDomain

**Type:** [AddVerifiableDomainPayload](/github-example/objects#addverifiabledomainpayload)

Adds a verifiable domain to an owning account.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#addverifiabledomaininput"><code>AddVerifiableDomainInput!</code></a></td>
<td>
<p>Parameters for AddVerifiableDomain</p>
</td>
</tr>
</tbody>
</table>

## approveVerifiableDomain

**Type:** [ApproveVerifiableDomainPayload](/github-example/objects#approveverifiabledomainpayload)

Approve a verifiable domain for notification delivery.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#approveverifiabledomaininput"><code>ApproveVerifiableDomainInput!</code></a></td>
<td>
<p>Parameters for ApproveVerifiableDomain</p>
</td>
</tr>
</tbody>
</table>

## archiveRepository

**Type:** [ArchiveRepositoryPayload](/github-example/objects#archiverepositorypayload)

Marks a repository as archived.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#archiverepositoryinput"><code>ArchiveRepositoryInput!</code></a></td>
<td>
<p>Parameters for ArchiveRepository</p>
</td>
</tr>
</tbody>
</table>

## cancelEnterpriseAdminInvitation

**Type:** [CancelEnterpriseAdminInvitationPayload](/github-example/objects#cancelenterpriseadmininvitationpayload)

Cancels a pending invitation for an administrator to join an enterprise.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#cancelenterpriseadmininvitationinput"><code>CancelEnterpriseAdminInvitationInput!</code></a></td>
<td>
<p>Parameters for CancelEnterpriseAdminInvitation</p>
</td>
</tr>
</tbody>
</table>

## changeUserStatus

**Type:** [ChangeUserStatusPayload](/github-example/objects#changeuserstatuspayload)

Update your status on GitHub.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#changeuserstatusinput"><code>ChangeUserStatusInput!</code></a></td>
<td>
<p>Parameters for ChangeUserStatus</p>
</td>
</tr>
</tbody>
</table>

## clearLabelsFromLabelable

**Type:** [ClearLabelsFromLabelablePayload](/github-example/objects#clearlabelsfromlabelablepayload)

Clears all labels from a labelable object.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#clearlabelsfromlabelableinput"><code>ClearLabelsFromLabelableInput!</code></a></td>
<td>
<p>Parameters for ClearLabelsFromLabelable</p>
</td>
</tr>
</tbody>
</table>

## cloneProject

**Type:** [CloneProjectPayload](/github-example/objects#cloneprojectpayload)

Creates a new project by cloning configuration from an existing project.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#cloneprojectinput"><code>CloneProjectInput!</code></a></td>
<td>
<p>Parameters for CloneProject</p>
</td>
</tr>
</tbody>
</table>

## cloneTemplateRepository

**Type:** [CloneTemplateRepositoryPayload](/github-example/objects#clonetemplaterepositorypayload)

Create a new repository with the same files and directory structure as a template repository.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#clonetemplaterepositoryinput"><code>CloneTemplateRepositoryInput!</code></a></td>
<td>
<p>Parameters for CloneTemplateRepository</p>
</td>
</tr>
</tbody>
</table>

## closeIssue

**Type:** [CloseIssuePayload](/github-example/objects#closeissuepayload)

Close an issue.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#closeissueinput"><code>CloseIssueInput!</code></a></td>
<td>
<p>Parameters for CloseIssue</p>
</td>
</tr>
</tbody>
</table>

## closePullRequest

**Type:** [ClosePullRequestPayload](/github-example/objects#closepullrequestpayload)

Close a pull request.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#closepullrequestinput"><code>ClosePullRequestInput!</code></a></td>
<td>
<p>Parameters for ClosePullRequest</p>
</td>
</tr>
</tbody>
</table>

## convertProjectCardNoteToIssue

**Type:** [ConvertProjectCardNoteToIssuePayload](/github-example/objects#convertprojectcardnotetoissuepayload)

Convert a project note card to one associated with a newly created issue.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#convertprojectcardnotetoissueinput"><code>ConvertProjectCardNoteToIssueInput!</code></a></td>
<td>
<p>Parameters for ConvertProjectCardNoteToIssue</p>
</td>
</tr>
</tbody>
</table>

## createBranchProtectionRule

**Type:** [CreateBranchProtectionRulePayload](/github-example/objects#createbranchprotectionrulepayload)

Create a new branch protection rule

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#createbranchprotectionruleinput"><code>CreateBranchProtectionRuleInput!</code></a></td>
<td>
<p>Parameters for CreateBranchProtectionRule</p>
</td>
</tr>
</tbody>
</table>

## createCheckRun

**Type:** [CreateCheckRunPayload](/github-example/objects#createcheckrunpayload)

Create a check run.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#createcheckruninput"><code>CreateCheckRunInput!</code></a></td>
<td>
<p>Parameters for CreateCheckRun</p>
</td>
</tr>
</tbody>
</table>

## createCheckSuite

**Type:** [CreateCheckSuitePayload](/github-example/objects#createchecksuitepayload)

Create a check suite

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#createchecksuiteinput"><code>CreateCheckSuiteInput!</code></a></td>
<td>
<p>Parameters for CreateCheckSuite</p>
</td>
</tr>
</tbody>
</table>

## createContentAttachment

**Type:** [CreateContentAttachmentPayload](/github-example/objects#createcontentattachmentpayload)

Create a content attachment.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#createcontentattachmentinput"><code>CreateContentAttachmentInput!</code></a></td>
<td>
<p>Parameters for CreateContentAttachment</p>
</td>
</tr>
</tbody>
</table>

## createDeployment

**Type:** [CreateDeploymentPayload](/github-example/objects#createdeploymentpayload)

Creates a new deployment event.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#createdeploymentinput"><code>CreateDeploymentInput!</code></a></td>
<td>
<p>Parameters for CreateDeployment</p>
</td>
</tr>
</tbody>
</table>

## createDeploymentStatus

**Type:** [CreateDeploymentStatusPayload](/github-example/objects#createdeploymentstatuspayload)

Create a deployment status.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#createdeploymentstatusinput"><code>CreateDeploymentStatusInput!</code></a></td>
<td>
<p>Parameters for CreateDeploymentStatus</p>
</td>
</tr>
</tbody>
</table>

## createEnterpriseOrganization

**Type:** [CreateEnterpriseOrganizationPayload](/github-example/objects#createenterpriseorganizationpayload)

Creates an organization as part of an enterprise account.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#createenterpriseorganizationinput"><code>CreateEnterpriseOrganizationInput!</code></a></td>
<td>
<p>Parameters for CreateEnterpriseOrganization</p>
</td>
</tr>
</tbody>
</table>

## createIpAllowListEntry

**Type:** [CreateIpAllowListEntryPayload](/github-example/objects#createipallowlistentrypayload)

Creates a new IP allow list entry.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#createipallowlistentryinput"><code>CreateIpAllowListEntryInput!</code></a></td>
<td>
<p>Parameters for CreateIpAllowListEntry</p>
</td>
</tr>
</tbody>
</table>

## createIssue

**Type:** [CreateIssuePayload](/github-example/objects#createissuepayload)

Creates a new issue.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#createissueinput"><code>CreateIssueInput!</code></a></td>
<td>
<p>Parameters for CreateIssue</p>
</td>
</tr>
</tbody>
</table>

## createLabel

**Type:** [CreateLabelPayload](/github-example/objects#createlabelpayload)

Creates a new label.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#createlabelinput"><code>CreateLabelInput!</code></a></td>
<td>
<p>Parameters for CreateLabel</p>
</td>
</tr>
</tbody>
</table>

## createProject

**Type:** [CreateProjectPayload](/github-example/objects#createprojectpayload)

Creates a new project.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#createprojectinput"><code>CreateProjectInput!</code></a></td>
<td>
<p>Parameters for CreateProject</p>
</td>
</tr>
</tbody>
</table>

## createPullRequest

**Type:** [CreatePullRequestPayload](/github-example/objects#createpullrequestpayload)

Create a new pull request

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#createpullrequestinput"><code>CreatePullRequestInput!</code></a></td>
<td>
<p>Parameters for CreatePullRequest</p>
</td>
</tr>
</tbody>
</table>

## createRef

**Type:** [CreateRefPayload](/github-example/objects#createrefpayload)

Create a new Git Ref.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#createrefinput"><code>CreateRefInput!</code></a></td>
<td>
<p>Parameters for CreateRef</p>
</td>
</tr>
</tbody>
</table>

## createRepository

**Type:** [CreateRepositoryPayload](/github-example/objects#createrepositorypayload)

Create a new repository.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#createrepositoryinput"><code>CreateRepositoryInput!</code></a></td>
<td>
<p>Parameters for CreateRepository</p>
</td>
</tr>
</tbody>
</table>

## createTeamDiscussion

**Type:** [CreateTeamDiscussionPayload](/github-example/objects#createteamdiscussionpayload)

Creates a new team discussion.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#createteamdiscussioninput"><code>CreateTeamDiscussionInput!</code></a></td>
<td>
<p>Parameters for CreateTeamDiscussion</p>
</td>
</tr>
</tbody>
</table>

## createTeamDiscussionComment

**Type:** [CreateTeamDiscussionCommentPayload](/github-example/objects#createteamdiscussioncommentpayload)

Creates a new team discussion comment.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#createteamdiscussioncommentinput"><code>CreateTeamDiscussionCommentInput!</code></a></td>
<td>
<p>Parameters for CreateTeamDiscussionComment</p>
</td>
</tr>
</tbody>
</table>

## declineTopicSuggestion

**Type:** [DeclineTopicSuggestionPayload](/github-example/objects#declinetopicsuggestionpayload)

Rejects a suggested topic for the repository.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#declinetopicsuggestioninput"><code>DeclineTopicSuggestionInput!</code></a></td>
<td>
<p>Parameters for DeclineTopicSuggestion</p>
</td>
</tr>
</tbody>
</table>

## deleteBranchProtectionRule

**Type:** [DeleteBranchProtectionRulePayload](/github-example/objects#deletebranchprotectionrulepayload)

Delete a branch protection rule

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#deletebranchprotectionruleinput"><code>DeleteBranchProtectionRuleInput!</code></a></td>
<td>
<p>Parameters for DeleteBranchProtectionRule</p>
</td>
</tr>
</tbody>
</table>

## deleteDeployment

**Type:** [DeleteDeploymentPayload](/github-example/objects#deletedeploymentpayload)

Deletes a deployment.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#deletedeploymentinput"><code>DeleteDeploymentInput!</code></a></td>
<td>
<p>Parameters for DeleteDeployment</p>
</td>
</tr>
</tbody>
</table>

## deleteIpAllowListEntry

**Type:** [DeleteIpAllowListEntryPayload](/github-example/objects#deleteipallowlistentrypayload)

Deletes an IP allow list entry.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#deleteipallowlistentryinput"><code>DeleteIpAllowListEntryInput!</code></a></td>
<td>
<p>Parameters for DeleteIpAllowListEntry</p>
</td>
</tr>
</tbody>
</table>

## deleteIssue

**Type:** [DeleteIssuePayload](/github-example/objects#deleteissuepayload)

Deletes an Issue object.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#deleteissueinput"><code>DeleteIssueInput!</code></a></td>
<td>
<p>Parameters for DeleteIssue</p>
</td>
</tr>
</tbody>
</table>

## deleteIssueComment

**Type:** [DeleteIssueCommentPayload](/github-example/objects#deleteissuecommentpayload)

Deletes an IssueComment object.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#deleteissuecommentinput"><code>DeleteIssueCommentInput!</code></a></td>
<td>
<p>Parameters for DeleteIssueComment</p>
</td>
</tr>
</tbody>
</table>

## deleteLabel

**Type:** [DeleteLabelPayload](/github-example/objects#deletelabelpayload)

Deletes a label.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#deletelabelinput"><code>DeleteLabelInput!</code></a></td>
<td>
<p>Parameters for DeleteLabel</p>
</td>
</tr>
</tbody>
</table>

## deletePackageVersion

**Type:** [DeletePackageVersionPayload](/github-example/objects#deletepackageversionpayload)

Delete a package version.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#deletepackageversioninput"><code>DeletePackageVersionInput!</code></a></td>
<td>
<p>Parameters for DeletePackageVersion</p>
</td>
</tr>
</tbody>
</table>

## deleteProject

**Type:** [DeleteProjectPayload](/github-example/objects#deleteprojectpayload)

Deletes a project.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#deleteprojectinput"><code>DeleteProjectInput!</code></a></td>
<td>
<p>Parameters for DeleteProject</p>
</td>
</tr>
</tbody>
</table>

## deleteProjectCard

**Type:** [DeleteProjectCardPayload](/github-example/objects#deleteprojectcardpayload)

Deletes a project card.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#deleteprojectcardinput"><code>DeleteProjectCardInput!</code></a></td>
<td>
<p>Parameters for DeleteProjectCard</p>
</td>
</tr>
</tbody>
</table>

## deleteProjectColumn

**Type:** [DeleteProjectColumnPayload](/github-example/objects#deleteprojectcolumnpayload)

Deletes a project column.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#deleteprojectcolumninput"><code>DeleteProjectColumnInput!</code></a></td>
<td>
<p>Parameters for DeleteProjectColumn</p>
</td>
</tr>
</tbody>
</table>

## deletePullRequestReview

**Type:** [DeletePullRequestReviewPayload](/github-example/objects#deletepullrequestreviewpayload)

Deletes a pull request review.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#deletepullrequestreviewinput"><code>DeletePullRequestReviewInput!</code></a></td>
<td>
<p>Parameters for DeletePullRequestReview</p>
</td>
</tr>
</tbody>
</table>

## deletePullRequestReviewComment

**Type:** [DeletePullRequestReviewCommentPayload](/github-example/objects#deletepullrequestreviewcommentpayload)

Deletes a pull request review comment.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#deletepullrequestreviewcommentinput"><code>DeletePullRequestReviewCommentInput!</code></a></td>
<td>
<p>Parameters for DeletePullRequestReviewComment</p>
</td>
</tr>
</tbody>
</table>

## deleteRef

**Type:** [DeleteRefPayload](/github-example/objects#deleterefpayload)

Delete a Git Ref.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#deleterefinput"><code>DeleteRefInput!</code></a></td>
<td>
<p>Parameters for DeleteRef</p>
</td>
</tr>
</tbody>
</table>

## deleteTeamDiscussion

**Type:** [DeleteTeamDiscussionPayload](/github-example/objects#deleteteamdiscussionpayload)

Deletes a team discussion.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#deleteteamdiscussioninput"><code>DeleteTeamDiscussionInput!</code></a></td>
<td>
<p>Parameters for DeleteTeamDiscussion</p>
</td>
</tr>
</tbody>
</table>

## deleteTeamDiscussionComment

**Type:** [DeleteTeamDiscussionCommentPayload](/github-example/objects#deleteteamdiscussioncommentpayload)

Deletes a team discussion comment.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#deleteteamdiscussioncommentinput"><code>DeleteTeamDiscussionCommentInput!</code></a></td>
<td>
<p>Parameters for DeleteTeamDiscussionComment</p>
</td>
</tr>
</tbody>
</table>

## deleteVerifiableDomain

**Type:** [DeleteVerifiableDomainPayload](/github-example/objects#deleteverifiabledomainpayload)

Deletes a verifiable domain.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#deleteverifiabledomaininput"><code>DeleteVerifiableDomainInput!</code></a></td>
<td>
<p>Parameters for DeleteVerifiableDomain</p>
</td>
</tr>
</tbody>
</table>

## disablePullRequestAutoMerge

**Type:** [DisablePullRequestAutoMergePayload](/github-example/objects#disablepullrequestautomergepayload)

Disable auto merge on the given pull request

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#disablepullrequestautomergeinput"><code>DisablePullRequestAutoMergeInput!</code></a></td>
<td>
<p>Parameters for DisablePullRequestAutoMerge</p>
</td>
</tr>
</tbody>
</table>

## dismissPullRequestReview

**Type:** [DismissPullRequestReviewPayload](/github-example/objects#dismisspullrequestreviewpayload)

Dismisses an approved or rejected pull request review.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#dismisspullrequestreviewinput"><code>DismissPullRequestReviewInput!</code></a></td>
<td>
<p>Parameters for DismissPullRequestReview</p>
</td>
</tr>
</tbody>
</table>

## enablePullRequestAutoMerge

**Type:** [EnablePullRequestAutoMergePayload](/github-example/objects#enablepullrequestautomergepayload)

Enable the default auto-merge on a pull request.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#enablepullrequestautomergeinput"><code>EnablePullRequestAutoMergeInput!</code></a></td>
<td>
<p>Parameters for EnablePullRequestAutoMerge</p>
</td>
</tr>
</tbody>
</table>

## followUser

**Type:** [FollowUserPayload](/github-example/objects#followuserpayload)

Follow a user.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#followuserinput"><code>FollowUserInput!</code></a></td>
<td>
<p>Parameters for FollowUser</p>
</td>
</tr>
</tbody>
</table>

## importProject

**Type:** [ImportProjectPayload](/github-example/objects#importprojectpayload)

Creates a new project by importing columns and a list of issues/PRs.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#importprojectinput"><code>ImportProjectInput!</code></a></td>
<td>
<p>Parameters for ImportProject</p>
</td>
</tr>
</tbody>
</table>

## inviteEnterpriseAdmin

**Type:** [InviteEnterpriseAdminPayload](/github-example/objects#inviteenterpriseadminpayload)

Invite someone to become an administrator of the enterprise.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#inviteenterpriseadmininput"><code>InviteEnterpriseAdminInput!</code></a></td>
<td>
<p>Parameters for InviteEnterpriseAdmin</p>
</td>
</tr>
</tbody>
</table>

## linkRepositoryToProject

**Type:** [LinkRepositoryToProjectPayload](/github-example/objects#linkrepositorytoprojectpayload)

Creates a repository link for a project.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#linkrepositorytoprojectinput"><code>LinkRepositoryToProjectInput!</code></a></td>
<td>
<p>Parameters for LinkRepositoryToProject</p>
</td>
</tr>
</tbody>
</table>

## lockLockable

**Type:** [LockLockablePayload](/github-example/objects#locklockablepayload)

Lock a lockable object

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#locklockableinput"><code>LockLockableInput!</code></a></td>
<td>
<p>Parameters for LockLockable</p>
</td>
</tr>
</tbody>
</table>

## markFileAsViewed

**Type:** [MarkFileAsViewedPayload](/github-example/objects#markfileasviewedpayload)

Mark a pull request file as viewed

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#markfileasviewedinput"><code>MarkFileAsViewedInput!</code></a></td>
<td>
<p>Parameters for MarkFileAsViewed</p>
</td>
</tr>
</tbody>
</table>

## markPullRequestReadyForReview

**Type:** [MarkPullRequestReadyForReviewPayload](/github-example/objects#markpullrequestreadyforreviewpayload)

Marks a pull request ready for review.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#markpullrequestreadyforreviewinput"><code>MarkPullRequestReadyForReviewInput!</code></a></td>
<td>
<p>Parameters for MarkPullRequestReadyForReview</p>
</td>
</tr>
</tbody>
</table>

## mergeBranch

**Type:** [MergeBranchPayload](/github-example/objects#mergebranchpayload)

Merge a head into a branch.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#mergebranchinput"><code>MergeBranchInput!</code></a></td>
<td>
<p>Parameters for MergeBranch</p>
</td>
</tr>
</tbody>
</table>

## mergePullRequest

**Type:** [MergePullRequestPayload](/github-example/objects#mergepullrequestpayload)

Merge a pull request.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#mergepullrequestinput"><code>MergePullRequestInput!</code></a></td>
<td>
<p>Parameters for MergePullRequest</p>
</td>
</tr>
</tbody>
</table>

## minimizeComment

**Type:** [MinimizeCommentPayload](/github-example/objects#minimizecommentpayload)

Minimizes a comment on an Issue, Commit, Pull Request, or Gist

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#minimizecommentinput"><code>MinimizeCommentInput!</code></a></td>
<td>
<p>Parameters for MinimizeComment</p>
</td>
</tr>
</tbody>
</table>

## moveProjectCard

**Type:** [MoveProjectCardPayload](/github-example/objects#moveprojectcardpayload)

Moves a project card to another place.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#moveprojectcardinput"><code>MoveProjectCardInput!</code></a></td>
<td>
<p>Parameters for MoveProjectCard</p>
</td>
</tr>
</tbody>
</table>

## moveProjectColumn

**Type:** [MoveProjectColumnPayload](/github-example/objects#moveprojectcolumnpayload)

Moves a project column to another place.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#moveprojectcolumninput"><code>MoveProjectColumnInput!</code></a></td>
<td>
<p>Parameters for MoveProjectColumn</p>
</td>
</tr>
</tbody>
</table>

## pinIssue

**Type:** [PinIssuePayload](/github-example/objects#pinissuepayload)

Pin an issue to a repository

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#pinissueinput"><code>PinIssueInput!</code></a></td>
<td>
<p>Parameters for PinIssue</p>
</td>
</tr>
</tbody>
</table>

## regenerateEnterpriseIdentityProviderRecoveryCodes

**Type:** [RegenerateEnterpriseIdentityProviderRecoveryCodesPayload](/github-example/objects#regenerateenterpriseidentityproviderrecoverycodespayload)

Regenerates the identity provider recovery codes for an enterprise

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#regenerateenterpriseidentityproviderrecoverycodesinput"><code>RegenerateEnterpriseIdentityProviderRecoveryCodesInput!</code></a></td>
<td>
<p>Parameters for RegenerateEnterpriseIdentityProviderRecoveryCodes</p>
</td>
</tr>
</tbody>
</table>

## regenerateVerifiableDomainToken

**Type:** [RegenerateVerifiableDomainTokenPayload](/github-example/objects#regenerateverifiabledomaintokenpayload)

Regenerates a verifiable domain's verification token.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#regenerateverifiabledomaintokeninput"><code>RegenerateVerifiableDomainTokenInput!</code></a></td>
<td>
<p>Parameters for RegenerateVerifiableDomainToken</p>
</td>
</tr>
</tbody>
</table>

## removeAssigneesFromAssignable

**Type:** [RemoveAssigneesFromAssignablePayload](/github-example/objects#removeassigneesfromassignablepayload)

Removes assignees from an assignable object.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#removeassigneesfromassignableinput"><code>RemoveAssigneesFromAssignableInput!</code></a></td>
<td>
<p>Parameters for RemoveAssigneesFromAssignable</p>
</td>
</tr>
</tbody>
</table>

## removeEnterpriseAdmin

**Type:** [RemoveEnterpriseAdminPayload](/github-example/objects#removeenterpriseadminpayload)

Removes an administrator from the enterprise.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#removeenterpriseadmininput"><code>RemoveEnterpriseAdminInput!</code></a></td>
<td>
<p>Parameters for RemoveEnterpriseAdmin</p>
</td>
</tr>
</tbody>
</table>

## removeEnterpriseIdentityProvider

**Type:** [RemoveEnterpriseIdentityProviderPayload](/github-example/objects#removeenterpriseidentityproviderpayload)

Removes the identity provider from an enterprise

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#removeenterpriseidentityproviderinput"><code>RemoveEnterpriseIdentityProviderInput!</code></a></td>
<td>
<p>Parameters for RemoveEnterpriseIdentityProvider</p>
</td>
</tr>
</tbody>
</table>

## removeEnterpriseOrganization

**Type:** [RemoveEnterpriseOrganizationPayload](/github-example/objects#removeenterpriseorganizationpayload)

Removes an organization from the enterprise

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#removeenterpriseorganizationinput"><code>RemoveEnterpriseOrganizationInput!</code></a></td>
<td>
<p>Parameters for RemoveEnterpriseOrganization</p>
</td>
</tr>
</tbody>
</table>

## removeEnterpriseSupportEntitlement

**Type:** [RemoveEnterpriseSupportEntitlementPayload](/github-example/objects#removeenterprisesupportentitlementpayload)

Removes a support entitlement from an enterprise member.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#removeenterprisesupportentitlementinput"><code>RemoveEnterpriseSupportEntitlementInput!</code></a></td>
<td>
<p>Parameters for RemoveEnterpriseSupportEntitlement</p>
</td>
</tr>
</tbody>
</table>

## removeLabelsFromLabelable

**Type:** [RemoveLabelsFromLabelablePayload](/github-example/objects#removelabelsfromlabelablepayload)

Removes labels from a Labelable object.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#removelabelsfromlabelableinput"><code>RemoveLabelsFromLabelableInput!</code></a></td>
<td>
<p>Parameters for RemoveLabelsFromLabelable</p>
</td>
</tr>
</tbody>
</table>

## removeOutsideCollaborator

**Type:** [RemoveOutsideCollaboratorPayload](/github-example/objects#removeoutsidecollaboratorpayload)

Removes outside collaborator from all repositories in an organization.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#removeoutsidecollaboratorinput"><code>RemoveOutsideCollaboratorInput!</code></a></td>
<td>
<p>Parameters for RemoveOutsideCollaborator</p>
</td>
</tr>
</tbody>
</table>

## removeReaction

**Type:** [RemoveReactionPayload](/github-example/objects#removereactionpayload)

Removes a reaction from a subject.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#removereactioninput"><code>RemoveReactionInput!</code></a></td>
<td>
<p>Parameters for RemoveReaction</p>
</td>
</tr>
</tbody>
</table>

## removeStar

**Type:** [RemoveStarPayload](/github-example/objects#removestarpayload)

Removes a star from a Starrable.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#removestarinput"><code>RemoveStarInput!</code></a></td>
<td>
<p>Parameters for RemoveStar</p>
</td>
</tr>
</tbody>
</table>

## reopenIssue

**Type:** [ReopenIssuePayload](/github-example/objects#reopenissuepayload)

Reopen a issue.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#reopenissueinput"><code>ReopenIssueInput!</code></a></td>
<td>
<p>Parameters for ReopenIssue</p>
</td>
</tr>
</tbody>
</table>

## reopenPullRequest

**Type:** [ReopenPullRequestPayload](/github-example/objects#reopenpullrequestpayload)

Reopen a pull request.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#reopenpullrequestinput"><code>ReopenPullRequestInput!</code></a></td>
<td>
<p>Parameters for ReopenPullRequest</p>
</td>
</tr>
</tbody>
</table>

## requestReviews

**Type:** [RequestReviewsPayload](/github-example/objects#requestreviewspayload)

Set review requests on a pull request.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#requestreviewsinput"><code>RequestReviewsInput!</code></a></td>
<td>
<p>Parameters for RequestReviews</p>
</td>
</tr>
</tbody>
</table>

## rerequestCheckSuite

**Type:** [RerequestCheckSuitePayload](/github-example/objects#rerequestchecksuitepayload)

Rerequests an existing check suite.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#rerequestchecksuiteinput"><code>RerequestCheckSuiteInput!</code></a></td>
<td>
<p>Parameters for RerequestCheckSuite</p>
</td>
</tr>
</tbody>
</table>

## resolveReviewThread

**Type:** [ResolveReviewThreadPayload](/github-example/objects#resolvereviewthreadpayload)

Marks a review thread as resolved.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#resolvereviewthreadinput"><code>ResolveReviewThreadInput!</code></a></td>
<td>
<p>Parameters for ResolveReviewThread</p>
</td>
</tr>
</tbody>
</table>

## setEnterpriseIdentityProvider

**Type:** [SetEnterpriseIdentityProviderPayload](/github-example/objects#setenterpriseidentityproviderpayload)

Creates or updates the identity provider for an enterprise.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#setenterpriseidentityproviderinput"><code>SetEnterpriseIdentityProviderInput!</code></a></td>
<td>
<p>Parameters for SetEnterpriseIdentityProvider</p>
</td>
</tr>
</tbody>
</table>

## setOrganizationInteractionLimit

**Type:** [SetOrganizationInteractionLimitPayload](/github-example/objects#setorganizationinteractionlimitpayload)

Set an organization level interaction limit for an organization's public repositories.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#setorganizationinteractionlimitinput"><code>SetOrganizationInteractionLimitInput!</code></a></td>
<td>
<p>Parameters for SetOrganizationInteractionLimit</p>
</td>
</tr>
</tbody>
</table>

## setRepositoryInteractionLimit

**Type:** [SetRepositoryInteractionLimitPayload](/github-example/objects#setrepositoryinteractionlimitpayload)

Sets an interaction limit setting for a repository.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#setrepositoryinteractionlimitinput"><code>SetRepositoryInteractionLimitInput!</code></a></td>
<td>
<p>Parameters for SetRepositoryInteractionLimit</p>
</td>
</tr>
</tbody>
</table>

## setUserInteractionLimit

**Type:** [SetUserInteractionLimitPayload](/github-example/objects#setuserinteractionlimitpayload)

Set a user level interaction limit for an user's public repositories.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#setuserinteractionlimitinput"><code>SetUserInteractionLimitInput!</code></a></td>
<td>
<p>Parameters for SetUserInteractionLimit</p>
</td>
</tr>
</tbody>
</table>

## submitPullRequestReview

**Type:** [SubmitPullRequestReviewPayload](/github-example/objects#submitpullrequestreviewpayload)

Submits a pending pull request review.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#submitpullrequestreviewinput"><code>SubmitPullRequestReviewInput!</code></a></td>
<td>
<p>Parameters for SubmitPullRequestReview</p>
</td>
</tr>
</tbody>
</table>

## transferIssue

**Type:** [TransferIssuePayload](/github-example/objects#transferissuepayload)

Transfer an issue to a different repository

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#transferissueinput"><code>TransferIssueInput!</code></a></td>
<td>
<p>Parameters for TransferIssue</p>
</td>
</tr>
</tbody>
</table>

## unarchiveRepository

**Type:** [UnarchiveRepositoryPayload](/github-example/objects#unarchiverepositorypayload)

Unarchives a repository.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#unarchiverepositoryinput"><code>UnarchiveRepositoryInput!</code></a></td>
<td>
<p>Parameters for UnarchiveRepository</p>
</td>
</tr>
</tbody>
</table>

## unfollowUser

**Type:** [UnfollowUserPayload](/github-example/objects#unfollowuserpayload)

Unfollow a user.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#unfollowuserinput"><code>UnfollowUserInput!</code></a></td>
<td>
<p>Parameters for UnfollowUser</p>
</td>
</tr>
</tbody>
</table>

## unlinkRepositoryFromProject

**Type:** [UnlinkRepositoryFromProjectPayload](/github-example/objects#unlinkrepositoryfromprojectpayload)

Deletes a repository link from a project.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#unlinkrepositoryfromprojectinput"><code>UnlinkRepositoryFromProjectInput!</code></a></td>
<td>
<p>Parameters for UnlinkRepositoryFromProject</p>
</td>
</tr>
</tbody>
</table>

## unlockLockable

**Type:** [UnlockLockablePayload](/github-example/objects#unlocklockablepayload)

Unlock a lockable object

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#unlocklockableinput"><code>UnlockLockableInput!</code></a></td>
<td>
<p>Parameters for UnlockLockable</p>
</td>
</tr>
</tbody>
</table>

## unmarkFileAsViewed

**Type:** [UnmarkFileAsViewedPayload](/github-example/objects#unmarkfileasviewedpayload)

Unmark a pull request file as viewed

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#unmarkfileasviewedinput"><code>UnmarkFileAsViewedInput!</code></a></td>
<td>
<p>Parameters for UnmarkFileAsViewed</p>
</td>
</tr>
</tbody>
</table>

## unmarkIssueAsDuplicate

**Type:** [UnmarkIssueAsDuplicatePayload](/github-example/objects#unmarkissueasduplicatepayload)

Unmark an issue as a duplicate of another issue.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#unmarkissueasduplicateinput"><code>UnmarkIssueAsDuplicateInput!</code></a></td>
<td>
<p>Parameters for UnmarkIssueAsDuplicate</p>
</td>
</tr>
</tbody>
</table>

## unminimizeComment

**Type:** [UnminimizeCommentPayload](/github-example/objects#unminimizecommentpayload)

Unminimizes a comment on an Issue, Commit, Pull Request, or Gist

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#unminimizecommentinput"><code>UnminimizeCommentInput!</code></a></td>
<td>
<p>Parameters for UnminimizeComment</p>
</td>
</tr>
</tbody>
</table>

## unpinIssue

**Type:** [UnpinIssuePayload](/github-example/objects#unpinissuepayload)

Unpin a pinned issue from a repository

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#unpinissueinput"><code>UnpinIssueInput!</code></a></td>
<td>
<p>Parameters for UnpinIssue</p>
</td>
</tr>
</tbody>
</table>

## unresolveReviewThread

**Type:** [UnresolveReviewThreadPayload](/github-example/objects#unresolvereviewthreadpayload)

Marks a review thread as unresolved.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#unresolvereviewthreadinput"><code>UnresolveReviewThreadInput!</code></a></td>
<td>
<p>Parameters for UnresolveReviewThread</p>
</td>
</tr>
</tbody>
</table>

## updateBranchProtectionRule

**Type:** [UpdateBranchProtectionRulePayload](/github-example/objects#updatebranchprotectionrulepayload)

Create a new branch protection rule

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#updatebranchprotectionruleinput"><code>UpdateBranchProtectionRuleInput!</code></a></td>
<td>
<p>Parameters for UpdateBranchProtectionRule</p>
</td>
</tr>
</tbody>
</table>

## updateCheckRun

**Type:** [UpdateCheckRunPayload](/github-example/objects#updatecheckrunpayload)

Update a check run

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#updatecheckruninput"><code>UpdateCheckRunInput!</code></a></td>
<td>
<p>Parameters for UpdateCheckRun</p>
</td>
</tr>
</tbody>
</table>

## updateCheckSuitePreferences

**Type:** [UpdateCheckSuitePreferencesPayload](/github-example/objects#updatechecksuitepreferencespayload)

Modifies the settings of an existing check suite

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#updatechecksuitepreferencesinput"><code>UpdateCheckSuitePreferencesInput!</code></a></td>
<td>
<p>Parameters for UpdateCheckSuitePreferences</p>
</td>
</tr>
</tbody>
</table>

## updateEnterpriseAdministratorRole

**Type:** [UpdateEnterpriseAdministratorRolePayload](/github-example/objects#updateenterpriseadministratorrolepayload)

Updates the role of an enterprise administrator.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#updateenterpriseadministratorroleinput"><code>UpdateEnterpriseAdministratorRoleInput!</code></a></td>
<td>
<p>Parameters for UpdateEnterpriseAdministratorRole</p>
</td>
</tr>
</tbody>
</table>

## updateEnterpriseAllowPrivateRepositoryForkingSetting

**Type:** [UpdateEnterpriseAllowPrivateRepositoryForkingSettingPayload](/github-example/objects#updateenterpriseallowprivaterepositoryforkingsettingpayload)

Sets whether private repository forks are enabled for an enterprise.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#updateenterpriseallowprivaterepositoryforkingsettinginput"><code>UpdateEnterpriseAllowPrivateRepositoryForkingSettingInput!</code></a></td>
<td>
<p>Parameters for UpdateEnterpriseAllowPrivateRepositoryForkingSetting</p>
</td>
</tr>
</tbody>
</table>

## updateEnterpriseDefaultRepositoryPermissionSetting

**Type:** [UpdateEnterpriseDefaultRepositoryPermissionSettingPayload](/github-example/objects#updateenterprisedefaultrepositorypermissionsettingpayload)

Sets the default repository permission for organizations in an enterprise.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#updateenterprisedefaultrepositorypermissionsettinginput"><code>UpdateEnterpriseDefaultRepositoryPermissionSettingInput!</code></a></td>
<td>
<p>Parameters for UpdateEnterpriseDefaultRepositoryPermissionSetting</p>
</td>
</tr>
</tbody>
</table>

## updateEnterpriseMembersCanChangeRepositoryVisibilitySetting

**Type:** [UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingPayload](/github-example/objects#updateenterprisememberscanchangerepositoryvisibilitysettingpayload)

Sets whether organization members with admin permissions on a repository can change repository visibility.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#updateenterprisememberscanchangerepositoryvisibilitysettinginput"><code>UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingInput!</code></a></td>
<td>
<p>Parameters for UpdateEnterpriseMembersCanChangeRepositoryVisibilitySetting</p>
</td>
</tr>
</tbody>
</table>

## updateEnterpriseMembersCanCreateRepositoriesSetting

**Type:** [UpdateEnterpriseMembersCanCreateRepositoriesSettingPayload](/github-example/objects#updateenterprisememberscancreaterepositoriessettingpayload)

Sets the members can create repositories setting for an enterprise.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#updateenterprisememberscancreaterepositoriessettinginput"><code>UpdateEnterpriseMembersCanCreateRepositoriesSettingInput!</code></a></td>
<td>
<p>Parameters for UpdateEnterpriseMembersCanCreateRepositoriesSetting</p>
</td>
</tr>
</tbody>
</table>

## updateEnterpriseMembersCanDeleteIssuesSetting

**Type:** [UpdateEnterpriseMembersCanDeleteIssuesSettingPayload](/github-example/objects#updateenterprisememberscandeleteissuessettingpayload)

Sets the members can delete issues setting for an enterprise.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#updateenterprisememberscandeleteissuessettinginput"><code>UpdateEnterpriseMembersCanDeleteIssuesSettingInput!</code></a></td>
<td>
<p>Parameters for UpdateEnterpriseMembersCanDeleteIssuesSetting</p>
</td>
</tr>
</tbody>
</table>

## updateEnterpriseMembersCanDeleteRepositoriesSetting

**Type:** [UpdateEnterpriseMembersCanDeleteRepositoriesSettingPayload](/github-example/objects#updateenterprisememberscandeleterepositoriessettingpayload)

Sets the members can delete repositories setting for an enterprise.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#updateenterprisememberscandeleterepositoriessettinginput"><code>UpdateEnterpriseMembersCanDeleteRepositoriesSettingInput!</code></a></td>
<td>
<p>Parameters for UpdateEnterpriseMembersCanDeleteRepositoriesSetting</p>
</td>
</tr>
</tbody>
</table>

## updateEnterpriseMembersCanInviteCollaboratorsSetting

**Type:** [UpdateEnterpriseMembersCanInviteCollaboratorsSettingPayload](/github-example/objects#updateenterprisememberscaninvitecollaboratorssettingpayload)

Sets whether members can invite collaborators are enabled for an enterprise.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#updateenterprisememberscaninvitecollaboratorssettinginput"><code>UpdateEnterpriseMembersCanInviteCollaboratorsSettingInput!</code></a></td>
<td>
<p>Parameters for UpdateEnterpriseMembersCanInviteCollaboratorsSetting</p>
</td>
</tr>
</tbody>
</table>

## updateEnterpriseMembersCanMakePurchasesSetting

**Type:** [UpdateEnterpriseMembersCanMakePurchasesSettingPayload](/github-example/objects#updateenterprisememberscanmakepurchasessettingpayload)

Sets whether or not an organization admin can make purchases.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#updateenterprisememberscanmakepurchasessettinginput"><code>UpdateEnterpriseMembersCanMakePurchasesSettingInput!</code></a></td>
<td>
<p>Parameters for UpdateEnterpriseMembersCanMakePurchasesSetting</p>
</td>
</tr>
</tbody>
</table>

## updateEnterpriseMembersCanUpdateProtectedBranchesSetting

**Type:** [UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingPayload](/github-example/objects#updateenterprisememberscanupdateprotectedbranchessettingpayload)

Sets the members can update protected branches setting for an enterprise.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#updateenterprisememberscanupdateprotectedbranchessettinginput"><code>UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingInput!</code></a></td>
<td>
<p>Parameters for UpdateEnterpriseMembersCanUpdateProtectedBranchesSetting</p>
</td>
</tr>
</tbody>
</table>

## updateEnterpriseMembersCanViewDependencyInsightsSetting

**Type:** [UpdateEnterpriseMembersCanViewDependencyInsightsSettingPayload](/github-example/objects#updateenterprisememberscanviewdependencyinsightssettingpayload)

Sets the members can view dependency insights for an enterprise.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#updateenterprisememberscanviewdependencyinsightssettinginput"><code>UpdateEnterpriseMembersCanViewDependencyInsightsSettingInput!</code></a></td>
<td>
<p>Parameters for UpdateEnterpriseMembersCanViewDependencyInsightsSetting</p>
</td>
</tr>
</tbody>
</table>

## updateEnterpriseOrganizationProjectsSetting

**Type:** [UpdateEnterpriseOrganizationProjectsSettingPayload](/github-example/objects#updateenterpriseorganizationprojectssettingpayload)

Sets whether organization projects are enabled for an enterprise.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#updateenterpriseorganizationprojectssettinginput"><code>UpdateEnterpriseOrganizationProjectsSettingInput!</code></a></td>
<td>
<p>Parameters for UpdateEnterpriseOrganizationProjectsSetting</p>
</td>
</tr>
</tbody>
</table>

## updateEnterpriseProfile

**Type:** [UpdateEnterpriseProfilePayload](/github-example/objects#updateenterpriseprofilepayload)

Updates an enterprise's profile.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#updateenterpriseprofileinput"><code>UpdateEnterpriseProfileInput!</code></a></td>
<td>
<p>Parameters for UpdateEnterpriseProfile</p>
</td>
</tr>
</tbody>
</table>

## updateEnterpriseRepositoryProjectsSetting

**Type:** [UpdateEnterpriseRepositoryProjectsSettingPayload](/github-example/objects#updateenterpriserepositoryprojectssettingpayload)

Sets whether repository projects are enabled for a enterprise.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#updateenterpriserepositoryprojectssettinginput"><code>UpdateEnterpriseRepositoryProjectsSettingInput!</code></a></td>
<td>
<p>Parameters for UpdateEnterpriseRepositoryProjectsSetting</p>
</td>
</tr>
</tbody>
</table>

## updateEnterpriseTeamDiscussionsSetting

**Type:** [UpdateEnterpriseTeamDiscussionsSettingPayload](/github-example/objects#updateenterpriseteamdiscussionssettingpayload)

Sets whether team discussions are enabled for an enterprise.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#updateenterpriseteamdiscussionssettinginput"><code>UpdateEnterpriseTeamDiscussionsSettingInput!</code></a></td>
<td>
<p>Parameters for UpdateEnterpriseTeamDiscussionsSetting</p>
</td>
</tr>
</tbody>
</table>

## updateEnterpriseTwoFactorAuthenticationRequiredSetting

**Type:** [UpdateEnterpriseTwoFactorAuthenticationRequiredSettingPayload](/github-example/objects#updateenterprisetwofactorauthenticationrequiredsettingpayload)

Sets whether two factor authentication is required for all users in an enterprise.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#updateenterprisetwofactorauthenticationrequiredsettinginput"><code>UpdateEnterpriseTwoFactorAuthenticationRequiredSettingInput!</code></a></td>
<td>
<p>Parameters for UpdateEnterpriseTwoFactorAuthenticationRequiredSetting</p>
</td>
</tr>
</tbody>
</table>

## updateIpAllowListEnabledSetting

**Type:** [UpdateIpAllowListEnabledSettingPayload](/github-example/objects#updateipallowlistenabledsettingpayload)

Sets whether an IP allow list is enabled on an owner.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#updateipallowlistenabledsettinginput"><code>UpdateIpAllowListEnabledSettingInput!</code></a></td>
<td>
<p>Parameters for UpdateIpAllowListEnabledSetting</p>
</td>
</tr>
</tbody>
</table>

## updateIpAllowListEntry

**Type:** [UpdateIpAllowListEntryPayload](/github-example/objects#updateipallowlistentrypayload)

Updates an IP allow list entry.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#updateipallowlistentryinput"><code>UpdateIpAllowListEntryInput!</code></a></td>
<td>
<p>Parameters for UpdateIpAllowListEntry</p>
</td>
</tr>
</tbody>
</table>

## updateIssue

**Type:** [UpdateIssuePayload](/github-example/objects#updateissuepayload)

Updates an Issue.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#updateissueinput"><code>UpdateIssueInput!</code></a></td>
<td>
<p>Parameters for UpdateIssue</p>
</td>
</tr>
</tbody>
</table>

## updateIssueComment

**Type:** [UpdateIssueCommentPayload](/github-example/objects#updateissuecommentpayload)

Updates an IssueComment object.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#updateissuecommentinput"><code>UpdateIssueCommentInput!</code></a></td>
<td>
<p>Parameters for UpdateIssueComment</p>
</td>
</tr>
</tbody>
</table>

## updateLabel

**Type:** [UpdateLabelPayload](/github-example/objects#updatelabelpayload)

Updates an existing label.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#updatelabelinput"><code>UpdateLabelInput!</code></a></td>
<td>
<p>Parameters for UpdateLabel</p>
</td>
</tr>
</tbody>
</table>

## updateNotificationRestrictionSetting

**Type:** [UpdateNotificationRestrictionSettingPayload](/github-example/objects#updatenotificationrestrictionsettingpayload)

Update the setting to restrict notifications to only verified domains available to an owner.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#updatenotificationrestrictionsettinginput"><code>UpdateNotificationRestrictionSettingInput!</code></a></td>
<td>
<p>Parameters for UpdateNotificationRestrictionSetting</p>
</td>
</tr>
</tbody>
</table>

## updateProject

**Type:** [UpdateProjectPayload](/github-example/objects#updateprojectpayload)

Updates an existing project.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#updateprojectinput"><code>UpdateProjectInput!</code></a></td>
<td>
<p>Parameters for UpdateProject</p>
</td>
</tr>
</tbody>
</table>

## updateProjectCard

**Type:** [UpdateProjectCardPayload](/github-example/objects#updateprojectcardpayload)

Updates an existing project card.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#updateprojectcardinput"><code>UpdateProjectCardInput!</code></a></td>
<td>
<p>Parameters for UpdateProjectCard</p>
</td>
</tr>
</tbody>
</table>

## updateProjectColumn

**Type:** [UpdateProjectColumnPayload](/github-example/objects#updateprojectcolumnpayload)

Updates an existing project column.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#updateprojectcolumninput"><code>UpdateProjectColumnInput!</code></a></td>
<td>
<p>Parameters for UpdateProjectColumn</p>
</td>
</tr>
</tbody>
</table>

## updatePullRequest

**Type:** [UpdatePullRequestPayload](/github-example/objects#updatepullrequestpayload)

Update a pull request

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#updatepullrequestinput"><code>UpdatePullRequestInput!</code></a></td>
<td>
<p>Parameters for UpdatePullRequest</p>
</td>
</tr>
</tbody>
</table>

## updatePullRequestReview

**Type:** [UpdatePullRequestReviewPayload](/github-example/objects#updatepullrequestreviewpayload)

Updates the body of a pull request review.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#updatepullrequestreviewinput"><code>UpdatePullRequestReviewInput!</code></a></td>
<td>
<p>Parameters for UpdatePullRequestReview</p>
</td>
</tr>
</tbody>
</table>

## updatePullRequestReviewComment

**Type:** [UpdatePullRequestReviewCommentPayload](/github-example/objects#updatepullrequestreviewcommentpayload)

Updates a pull request review comment.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#updatepullrequestreviewcommentinput"><code>UpdatePullRequestReviewCommentInput!</code></a></td>
<td>
<p>Parameters for UpdatePullRequestReviewComment</p>
</td>
</tr>
</tbody>
</table>

## updateRef

**Type:** [UpdateRefPayload](/github-example/objects#updaterefpayload)

Update a Git Ref.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#updaterefinput"><code>UpdateRefInput!</code></a></td>
<td>
<p>Parameters for UpdateRef</p>
</td>
</tr>
</tbody>
</table>

## updateRefs

**Type:** [UpdateRefsPayload](/github-example/objects#updaterefspayload)

Creates, updates and/or deletes multiple refs in a repository.

This mutation takes a list of `RefUpdate`s and performs these updates
on the repository. All updates are performed atomically, meaning that
if one of them is rejected, no other ref will be modified.

`RefUpdate.beforeOid` specifies that the given reference needs to point
to the given value before performing any updates. A value of
`0000000000000000000000000000000000000000` can be used to verify that
the references should not exist.

`RefUpdate.afterOid` specifies the value that the given reference
will point to after performing all updates. A value of
`0000000000000000000000000000000000000000` can be used to delete a
reference.

If `RefUpdate.force` is set to `true`, a non-fast-forward updates
for the given reference will be allowed.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#updaterefsinput"><code>UpdateRefsInput!</code></a></td>
<td>
<p>Parameters for UpdateRefs</p>
</td>
</tr>
</tbody>
</table>

## updateRepository

**Type:** [UpdateRepositoryPayload](/github-example/objects#updaterepositorypayload)

Update information about a repository.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#updaterepositoryinput"><code>UpdateRepositoryInput!</code></a></td>
<td>
<p>Parameters for UpdateRepository</p>
</td>
</tr>
</tbody>
</table>

## updateSubscription

**Type:** [UpdateSubscriptionPayload](/github-example/objects#updatesubscriptionpayload)

Updates the state for subscribable subjects.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#updatesubscriptioninput"><code>UpdateSubscriptionInput!</code></a></td>
<td>
<p>Parameters for UpdateSubscription</p>
</td>
</tr>
</tbody>
</table>

## updateTeamDiscussion

**Type:** [UpdateTeamDiscussionPayload](/github-example/objects#updateteamdiscussionpayload)

Updates a team discussion.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#updateteamdiscussioninput"><code>UpdateTeamDiscussionInput!</code></a></td>
<td>
<p>Parameters for UpdateTeamDiscussion</p>
</td>
</tr>
</tbody>
</table>

## updateTeamDiscussionComment

**Type:** [UpdateTeamDiscussionCommentPayload](/github-example/objects#updateteamdiscussioncommentpayload)

Updates a discussion comment.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#updateteamdiscussioncommentinput"><code>UpdateTeamDiscussionCommentInput!</code></a></td>
<td>
<p>Parameters for UpdateTeamDiscussionComment</p>
</td>
</tr>
</tbody>
</table>

## updateTeamReviewAssignment

**Type:** [UpdateTeamReviewAssignmentPayload](/github-example/objects#updateteamreviewassignmentpayload)

Updates team review assignment.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#updateteamreviewassignmentinput"><code>UpdateTeamReviewAssignmentInput!</code></a></td>
<td>
<p>Parameters for UpdateTeamReviewAssignment</p>
</td>
</tr>
</tbody>
</table>

## updateTopics

**Type:** [UpdateTopicsPayload](/github-example/objects#updatetopicspayload)

Replaces the repository's topics with the given topics.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#updatetopicsinput"><code>UpdateTopicsInput!</code></a></td>
<td>
<p>Parameters for UpdateTopics</p>
</td>
</tr>
</tbody>
</table>

## verifyVerifiableDomain

**Type:** [VerifyVerifiableDomainPayload](/github-example/objects#verifyverifiabledomainpayload)

Verify that a verifiable domain has the expected DNS record.

**Arguments**

<table>
<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td><code>input</code></td>
<td><a href="/github-example/inputObjects#verifyverifiabledomaininput"><code>VerifyVerifiableDomainInput!</code></a></td>
<td>
<p>Parameters for VerifyVerifiableDomain</p>
</td>
</tr>
</tbody>
</table>

