import { createSelector } from 'reselect';


// 只在 state.todos or state.visibilityFilter 变化时重新计算 todos，而在其它部分（非相关）变化时不做计算。
// 可记忆的 selector 自身可以作为其它可记忆的 selector 的 input-selector。

// 跨多组件的共享 Selector
// 如果 connect 的 mapStateToProps 返回的不是一个对象而是一个函数，他将被用做为每个容器的实例创建一个单独的 mapStateToProps 函数。

// import { getVisibleTodos } from '../selectors'
// const mapStateToProps = state => {
//   return {
//     todos: getVisibleTodos(state)
//   }
// }


const getVisibilityFilter = (state) => state.visibilityFilter;
const getTodos = (state) => state.todos;

const getVisibleTodos = createSelector(
  [getVisibilityFilter, getTodos],
  (visibilityFilter, todos) => {
    switch (visibilityFilter) {
      case 'SHOW_ALL':
        return todos;
      case 'SHOW_COMPLETED':
        return todos.filter((t) => t.completed);
      case 'SHOW_ACTIVE':
        return todos.filter((t) => !t.completed);
      default:
        throw Error('an error happen!');
    }
  }
);

export default getVisibleTodos;
