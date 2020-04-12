import Api from '@/common/api.js';

export const config = {
    firebase: {
        apiKey: 'AIzaSyADeuL1QnB0fpW5wkwaV3rf-HRQArK8GTM',
        projectId: 'e28-zipfoods-sb'
    }
}

export const api = new Api({
    apiKey: config.firebase.apiKey,
    projectId: config.firebase.projectId
});


