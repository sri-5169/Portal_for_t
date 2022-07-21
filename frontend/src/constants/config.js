// API NOTIFICATION MESSAGES
export const API_NOTIFICATION_MESSAGES = {
    loading: {
        title: "Loading...",
        message: "Data is being loaded. Please wait"
    },
    success: {
        title: "Success",
        message: "Data successfully loaded"
    },
    requestFailure: {
        title: "Error!",
        message: "An error occur while parsing request data"
    },
    invalidCredentials : {
        title : "Error!",
        message: "Invalid Username or Password"
    },
    responseFailure: {
        title: "Error!",
        message: "An error occur while fetching response from server. Please try again"
    },
    networkError: {
        title: "Error!",
        message: "Unable to connect to the server. Please check internet connectivity and try again."
    }
}
 
// API SERVICE URL
// SAMPLE REQUEST
// NEED SERVICE CALL: { url: "/", method: "POST/GET/PUT/DELETE" }
export const SERVICE_URLS = {
    adminSignup : { url: '/signup', method: 'POST' },
    adminLogin : { url: '/login', method: 'POST' },
    sendOTP : {url : '/forgotpassword', method : 'POST'},
    createTeacherInfo : {url : '/newInfo', method : 'POST'},
    getAllInfos : {url : '/infos', method : 'GET'},
    getInfo : {url : '/detail', method : 'GET', query:true},
    userCounter : {url : '/countuser', method : 'GET'},
    getRefreshToken : { url: '/token', method: 'POST' },
    uploadFile : { url: '/file/upload', method: 'POST' },
    getComplaintById : {url: '/complaint', method: 'GET', query : true},
    seenTheComplain : {url: '/seenComplaint', method: 'PUT', query:true},
    getAllComplaints :  { url: '/complaints', method: 'GET'},
    newReport : {url : "/newReport", method : "POST"},
    getReport : {url: '/report', method: 'GET', query : true},
    getAllReports : { url: '/reports', method: 'GET'},
    deleteReport : { url: '/reports/delete', method: 'DELETE' ,query : true},
}