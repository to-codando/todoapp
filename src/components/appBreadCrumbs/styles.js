export default ({ ctx, css }) => css`
        ${ctx} {
            display:flex;
            justify-content:flex-start;
            align-items:center;
            height:100%;
            width:100%;
        }      

        ${ctx} ul {
            display: flex;
            justify-content: flex-start;
            width:100%;
        }

        ${ctx} li {
            display: flex;
            align-items:center;  
            color:#fff;
            font-weight: 300;
            font-size: .875rem    
        }

        ${ctx} li:first-of-type a {
            font-weight:bold
        }
        ${ctx} a {
            display: flex;
            align-items:center;
            color:#fff;
            font-weight: 300
        }
        ${ctx} a:hover {
            text-decoration: underline
        }
        ${ctx} span {}
    `