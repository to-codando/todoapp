export default ({ ctx, css }) => css`
        ${ctx} {
            display:flex;
            justify-content:flex-start;
            align-items:center;
            width:100%;
            height:11rem;
            background:#432695;
        }    
        
       ${ctx} .content {
            width:100%;
            max-width:1180px;
            margin:0 auto;
            padding:0 1rem;
            position:relative
        }

       ${ctx} > .content > button {
            width:4rem;
            height: 4rem;
            position:absolute;
            bottom:-6.7rem;
            right:0;
            border-radius:100%;
            border:0;
            color:#fff;
            background: #1EC1F4;
            box-shadow: 3px 3px 15px rgba(0, 0, 0, .3)
        }
    `