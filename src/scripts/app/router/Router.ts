export default class Router{
    //i'm not paid enough to migrate to SvelteKit
    static page: string;
    static callback: any;
    static link(callback){
        this.callback = callback;
    }
    static navigate(page: string){
        this.page = page;
        this.callback();
    }
}