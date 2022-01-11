export default ({ ctx, css }) => css`
        ${ctx} {
            display:flex;
            justify-content:flex-start;
            align-items: flex-start;
            flex-wrap: wrap;
            width:100%;
        }     
        
        ${ctx} .filter-area {
            display:flex;
            justify-content: flex-start;
            align-items: center;
            width:100%;
            height: 10rem;
            background: #e3e9ef
        }  
        
        ${ctx} > .content,
        ${ctx} > .filter-area > .content {
            display:flex;
            flex-wrap: wrap;
            width:100%;
            max-width:1180px;
            margin:0 auto;
            position:relative
        }     
        
        ${ctx}  .grid {
            display:flex;
            justify-content: space-between;
            width:100%;          
        }

        ${ctx} .gap {
            padding:3rem 0;
            width:100%;
        }

    `