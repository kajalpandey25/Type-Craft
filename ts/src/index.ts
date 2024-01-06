const getUsername = document.querySelector("#user") as HTMLInputElement;
const formSubmit = document.querySelector('.form') as HTMLInputElement;
const main_container = document.querySelector('.main-container') as HTMLElement;


// so lets define the contract of an object
interface UserData {
    id:number;
    login:string;
    avatar_url:string;
    location:string;
    url:string;
}

// Resuable function

function myCustomFetcher(url:string, options?:RequestInit){
  
}

function fetchUserData(url:string){
    myCustomFetcher(url, {});
}


// default fun call
fetchUserData("https://api.github.com/users");
