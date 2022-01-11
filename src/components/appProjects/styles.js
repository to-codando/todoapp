export default ({ ctx, css }) => css`
        ${ctx} {
            display:flex;
            justify-content:center;    
            align-items:center;   
            flex-wrap: wrap;     
            width:100%;
        }    
        
        ${ctx} > .content,
        ${ctx} > .filter-area .content {
            width:100%;
            max-width:1180px;
            margin:0 auto;
            padding:2rem 1rem 0 1rem;
            position:relative
        }

        ${ctx} .note-area {
            display: flex;
            align-items:center;
            width:100%;
            height:calc(100vh - 25rem);
        }

        ${ctx} .filter-area {
            display:flex;
            justify-content: flex-start;
            align-items: center;
            width:100%;
            height: 10rem;
            background: #e3e9ef
        }

        ${ctx} ul {
            display: flex;
            flex-wrap:wrap;
            width:100%;
            border:1px #ccc solid;
            border-radius:5px;
            background: #f8f8f8;
            margin-top:1rem
        }
        
        ${ctx} li {
            display:flex;
            align-items:center;
            width:100%;
            height:4rem;
            border-bottom: 1px #ccc solid;
            transition: .3s ease-in;
            cursor: pointer;
        }

        ${ctx} li:hover {
            background: #fff
        }

        ${ctx} a {
            display: flex;
            align-items:center;
            justify-content: space-between;
            width:100%;
        }

        ${ctx} span {
            color: #666;
            font-size: .875rem
        }

        ${ctx} span:first-of-type,
        ${ctx} span:last-of-type {
            padding:0 1rem
        }
    `