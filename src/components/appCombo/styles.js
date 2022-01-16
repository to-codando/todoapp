export default ({ ctx, css }) => css`
    ${ctx} {
        display:flex;
        justify-content:flex-start;
        align-items: flex-start;
        flex-wrap: wrap;
        width:100%;
        position: relative
    }       

    ${ctx} div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width:100%;
        height:3rem;
        border: 1px #ccc solid;
        border-radius: 3px;
        background: #fff;
        color: #666;
        padding:0 .5rem 0 1rem;
        cursor: pointer;
        font-size: .875rem;
    }

    ${ctx} span {
        padding: 0 0 0 .5rem
    }

    ${ctx} ul {
        width:100%;
        background:#fff;
        border: 1px #ccc solid;
        border-radius: 5px;
        box-shadow: 3px 3px 15px rgba(0, 0, 0, .2);
        display: none;
        position: absolute;
        top: 3rem;
		z-index:2000
    }

    ${ctx}:hover ul {
        display:block
    }

    ${ctx} li {
        width:100%;
        padding:1rem 1rem;
        font-size: .875rem;
        color: #666;
        border-bottom: 1px #ccc solid;
        cursor: pointer;
        transition: .3s ease-in;
    }

    ${ctx} li:hover {
        background: #f5f5f5;
    }

 `