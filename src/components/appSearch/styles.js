export default ({ ctx, css }) => css`
        ${ctx} {
            display:flex;
            justify-content: flex-start;
            align-items:center;
            width:100%
        }          
        
        ${ctx} input {
            color:#666;
            font-size: .875rem;
            font-weight: normal;
            border: 1px #ccc solid;
            border-radius: 3px;
            padding:0.5rem 1rem;
            outline:0;
            width:15rem
        }

        ${ctx}  button {
            color:#40CAD2;
            font-weight: bold;
            text-transform: uppercase;
            font-size: .875rem;
            border: 1px #40CAD2 solid;
            border-radius: 3px;
            padding:.5rem 1rem;
            margin-left:1rem;
            background: #f9f9f9;
            transition: .2s ease-in;
            width:120px
        }

        ${ctx}  button:hover {
            background: #40CAD2;
            color: #fff
        }

		${ctx}  button + button {
			border-color: #ff7a87;
			color: #ff7a87
		}

		${ctx}  button + button:hover {
			border-color: #ff166e;
			background: #ff166e;
		}
    `