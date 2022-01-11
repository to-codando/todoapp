export default ({ ctx, css }) => css`
        ${ctx} {
            display:flex;
            flex-wrap: wrap;
            justify-content:center;
            width:100%;
            color:#447ED6
        }   
        
        ${ctx} h2 {
            display:flex;
            justify-content:center;
            align-items:center;
            width:100%;
            font-size: 1.2rem;
            height:2rem;
        }

        ${ctx} span {
            font-weight: bold;
            font-size: 1.6rem;
            padding-right: .5rem
        }

        ${ctx} p {
            padding:1rem 2rem;
            background:#CAE7F8;
            border-radius: 5px;
            margin-top:1rem
        }
    `