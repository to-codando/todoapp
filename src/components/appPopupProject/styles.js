export default ({ ctx, css }) => css`
        ${ctx} {
            display:flex;
            justify-content:center;
            align-items:center;
            width:100%;
            height:100%;
            background: rgb(97, 68, 214, .8);
            z-index: 10000;
            position:fixed;
            top:0;
            left:0;
            right:0;
            bottom:0;
        }    

        ${ctx} > .content {
            width: 100%;
            max-width:450px;
            background: #fff;
            border-radius: 5px;
            padding:1rem;
        }

        ${ctx} > .content > h3 {
            font-size: 1.2rem;
            font-weight: bold;
            color: #B6B3CA;
            padding: 1rem 0;
        }

        ${ctx} input,
        ${ctx} textarea {
            width:100%;
            padding:1rem;
            color: #8d89a9;
            background: #f5f0ff;
            outline:0;
            border:0;
            border-radius: 5px;
            font-size: 1rem
        }

        ${ctx} textarea {
            margin-top: 1rem
        }

        ${ctx} input::placeholder,
        ${ctx} textarea::placeholder {
            color: #B6B3CA;
            opacity: 1
        }

        ${ctx} .button {
            width:calc(50% - .7rem);
            padding: 1rem 2rem;
            color: #666;
            background: #f9f9f9;
            border: 1px #ccc solid;
            border-radius:5px;
            text-transform: uppercase;
            font-weight: bold;
            font-size: .875rem;
            text-align:center;
            margin-top: 1rem
        }

        ${ctx} .button + .button {
            margin-left: 1rem
        }

        ${ctx} .button-red {
            background:#fff;
            border-color: #F2B7C5;
            color: #F2B7C5
        }

        ${ctx} .button-blue {
            background:#1EC1F4;
            border-color: #1EC1F4;
            color: #fff;
        }

        
    `
