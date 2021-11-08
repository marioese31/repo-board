import { Pipe, PipeTransform } from '@angular/core';
import { PullRequestStatus } from 'azure-devops-extension-api/Git';

@Pipe({
    name: 'prStatus',
    pure: true
})
export class PrStatusPipe implements PipeTransform {
    transform(status: PullRequestStatus) {
        switch (status) {
            case PullRequestStatus.Abandoned: return "Abandoned";
            case PullRequestStatus.Active: return "Active";
            // case PullRequestStatus.All: return "All";
            case PullRequestStatus.Completed: return "Completed";
            // case PullRequestStatus.NotSet: return "NotSet";
        }
        return "";
    }
}