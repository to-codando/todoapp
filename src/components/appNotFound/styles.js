export default ({ ctx, css }) => css`
        ${ctx} .wrapper { text-align:center }
        ${ctx} .title {
            display:flex;
            flex-wrap:wrap;
            width:100%;
            font-size: 2em;
            font-weight: bold;
            color: #5f61ef;
            margin-bottom:15px;
        }

        ${ctx} a {
            display:flex;
            flex-wrap:wrap;
            justify-content:center;
            align-items:center;
            padding:15px;
            border-radius:5px;
            outline:0;
            color:#fff;
            background:#5f61ef;
            margin-top:15px;
        }
    `