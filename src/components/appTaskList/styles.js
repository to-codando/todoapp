export default ({ ctx, css }) => css`
    ${ctx} {
        display:flex;
        justify-content:flex-start;
        align-items: flex-start;
        flex-wrap:wrap;
        width:100%;
    }   

    ${ctx} > .content{
        display: flex;
        align-items:center;
        width:100%;
        height:calc(100vh - 25rem);
    }    

    ${ctx} .task-list {
        display:flex;
        flex-wrap: wrap;
        width:100%;
        border: 1px #ccc solid;
        border-radius: 5px;
        background: #fff
    }

    ${ctx} .task-item {
        display:flex;
        justify-content:flex-start;
        align-items: flex-start;
        flex-wrap: wrap;
        width:100%;
        border-bottom: 1px #ccc solid;
    }

    ${ctx} .task-header {
        display:flex;
        justify-content:flex-start;
        align-items: center;
        width:100%;
        height: 4rem;
        border-bottom: 1px #ccc solid;
    }

    ${ctx} .task-id {
        width: 7rem;
        padding-left:1rem;
        color: #9f9f9f;
        font-size: .875rem;
        font-weight: bold
    }

    ${ctx} .task-title {
        width: calc(100% - 11rem);
        padding-left:1rem;
        color: #9f9f9f;
        font-size: .875rem;
    }

    ${ctx} .task-icon {
        display:flex;
        align-items:center;
        justify-content: center;
        width: 4rem;
        height: 4rem;
        cursor: pointer;
        transition: .3s
    }

    ${ctx} .task-icon:hover {
       color: #1EC1F4
    }

    ${ctx} .task-content {
        width: 100%;
        height: auto;
        padding: 1rem;
        background:#f1f1f1;
    }
    
    ${ctx} .task-content.hide-content {
        overflow:hidden;   
        padding:0;
        height: 0;
    }

    ${ctx} .task-controller  {
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding-bottom: 1rem;
        width:100%;
    }

    ${ctx} .button {
        padding: .7rem 1rem;
        border-radius: 5px;
        border: 1px #ccc solid;
        color: #666;
        text-transform: uppercase;
        background: #f9f9f9;
        font-weight: bold;
        transition: .3s ease-in
    }

    ${ctx} .button  + .button {
        margin-left: 1rem
    }

    ${ctx} .button-edit {
        border-color: #40CAD2;
        color: #40CAD2;
    }
    
    ${ctx} .button-edit:hover {
        color: #fff;
        background:#40CAD2
    }

    ${ctx} .button-remove {
        border-color: #f197b5;
        color: #f197b5
    }

    ${ctx} .button-remove:hover {
        color: #fff;
        background: #f197b5
    }

    ${ctx} p {
        color: #666;
        font-size: .875rem;
        font-weight: normal;
        line-height: 1.2rem
    }

`