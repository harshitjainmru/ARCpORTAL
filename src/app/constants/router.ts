export const LOGIN = {
  baseUrl: "login",
  get fullUrl() {
    return `/${this.baseUrl}`;
  },
};

// export const LOGIN = {
//   baseUrl: "login",
//   fullUrl() {
//     return `${ACCOUNT.fullUrl()}/${this.baseUrl}`;
//   },
//   // Login.fullUrl() ->   /account/login
// };

// export const FEATURES = {
//   baseUrl: "features",
//   fullUrl() {
//     return `/${this.baseUrl}`;
//   },
// };
export const RESET={
  baseUrl: "reset-password",
  get fullUrl(){
    return `/${this.baseUrl}`
  }
}

export const FORGOT = {
  baseUrl: "forgot-password",
  get fullUrl() {
    return `/${this.baseUrl}`;
  },
};
// export const USER = {
//   baseUrl: "user",
//   fullUrl(userId: string) {
//     return `${FEATURES.fullUrl()}/${this.baseUrl}/${userId}`;
//   },
// };
export const DASHBOARD={
  baseUrl:"dashboard",
  get fullUrl(){
    return `/${this.baseUrl}`
  }
}
export const USER_MANAGE={
  baseUrl:"user-management",
  get fullUrl(){
    return `/${this.baseUrl}`
  }
}
export const CLIENT_MANAGE={
  baseUrl:"client-management",
 get fullUrl(){
    return `/${this.baseUrl}`
  }
}
export const CLIENT_DETAILS={
  baseUrl:"client-detail",
  get fullUrl(){
    return `${CLIENT_MANAGE.fullUrl}/${this.baseUrl}`
  }
}
export const PROFILE_MANAGE={
  baseUrl:"my-profile",
  get fullUrl(){
    return `/${this.baseUrl}`
  }
}
export const TRANSACTION_MANAGE={
  baseUrl:"transaction-management",
  get fullUrl(){
    return `/${this.baseUrl}`
  }
}
export const EARNING_MANAGE={
  baseUrl:"earning-management",
  get fullUrl(){
    return `/${this.baseUrl}`
  }
}
export const NOTIFICATION_MANAGE={
  baseUrl:"notification-management",
 get fullUrl(){
    return `/${this.baseUrl}`
  }
}
export const SEND_NOTIFICATION_MANAGE={
  baseUrl:"send-notification-management",
 get fullUrl(){
    return `${NOTIFICATION_MANAGE.fullUrl}/${this.baseUrl}`
  }
}
export const CONTENT_MANAGE={
  baseUrl:"content-management",
  get fullUrl(){
    return `/${this.baseUrl}`
  }
}
export const ADD_FAQ={
  baseUrl:"new-faq",
  get fullUrl(){
    return `${CONTENT_MANAGE.fullUrl}/${this.baseUrl}`
  }
}
export const STAFF_MANAGE={
  baseUrl:"staff-management",
 get fullUrl(){
    return `/${this.baseUrl}`
  }
}
export const NEW_STAFF_MANAGE={
  baseUrl:"new-staff-member",
 get fullUrl(){
    return `${STAFF_MANAGE.fullUrl}/${this.baseUrl}`
  }
}
