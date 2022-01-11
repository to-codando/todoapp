export default ({ ctx, css }) => css`
    ${ctx},
    ${ctx} ul {
        display:flex;
        justify-content:flex-start;
        align-items: flex-start;
        width:100%;
    }     

    ${ctx} ul {
        border: 1px #ccc solid;
        border-radius: 5px;
        overflow: hidden
    }
    
    ${ctx} li {
        font-size: .875rem;
        color: #9b9797;
        background:#fff;
        padding:0.7rem 1rem;
        text-transform: uppercase;
        font-weight: 500
    }

    ${ctx} li + li {
        border-left: 1px #ccc solid
    }

    ${ctx} .active {
        background: #1EC1F4;
        color: #fff ;
        border: 1px  #1EC1F4 solid;     
    }
`