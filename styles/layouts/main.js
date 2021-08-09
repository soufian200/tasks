import css from 'styled-jsx/css';
import colors from '../../constants/colors';


export default css.global`
.body{
    display:flex;
    justify-content: center;
}
.sec.todos_body{
    width: 35rem;
    margin: 0 1rem;
    margin-bottom: 3rem;
}
.todos_bar{
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    justify-content: space-between;
}
.h1{
    color: ${colors.black}
}

.todos {
    width: 100%;
    max-width: 40rem;
    mix-width: 20rem;
    background: #fff;
    border-radius: .5rem;
    padding: 1rem;
    box-shadow: 0 .3rem .6rem #00000016;
}

ul.tasks{
}
ul.tasks > li{
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
}
ul.tasks > li .task{
    padding: 1rem;
    font-size: 1rem;
    font-weight: bold;
    text-transform: capitalize;
    margin-left: 1rem;
    border-radius: .3rem;
    color: #11152d;
    background: #f4f4f4;
    border: solid .01rem #e7e7e7;
}
.task{
    width: 100%;
    padding-left: 1rem;
}




`