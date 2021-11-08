import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'vote',
    pure: true
})
export class VotePipe implements PipeTransform {
    transform(vote: number, type: 'icon' | 'title' = 'icon') {
        if (type === 'title') {
            switch (vote) {
                case 10: return "Approved";
                case 5: return "Approved with suggestions";
                case -10: return "Rejected";
                case -5: return "Waiting for author";
                default: return "";
            }
        }

        switch (vote) {
            case 10: return "ms-Icon--Approved";
            case 5: return "ms-Icon--ApprovedWithSuggestions";
            case -10: return "ms-Icon--Rejected";
            case -5: return "ms-Icon--WaitingForAuthor";
            default: return "ms-Icon--NoResponse";
        }
    }
}