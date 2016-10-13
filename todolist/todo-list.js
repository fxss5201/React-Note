//方法和属性从父组件一层一层传递到子组件，耦合性重，难以维护。

var TodoBox = React.createClass({
    getInitialState:function(){
        return {
            data:[
                {'id':'1','task':'学习react','complete':'false'},
                {'id':'2','task':'学习redux','complete':'false'},
                {'id':'3','task':'温习react','complete':'false'},
            ]
        };
    },
    handleTaskDelete:function(taskId){
        var data = this.state.data;
        data = data.filter(function(task) {
            return task.id !== taskId;
        });
        this.setState({data});
    },
    handleToggleComplete:function(taskId){
        var data = this.state.data;
        for(var i in data) {
            if (data[i].id === taksId) {
                data[i].complete = data[i].complete === "true" ? "false" : "true";
                break;
            }
        }
        this.setState({data});
    },
    generateId:function(){
        return Math.floor(Math.random()*9000) + 1000;
    },
    handleSubmit:function(task){
        var data = this.state.data;
        var id = this.generateId();
        var complete = 'false';
        data = data.concat([{"id":id,"task":task,"complete":complete}]);
        this.setState({data});
    },
    render:function(){
        var statistics = {
            todoCount: this.state.data.length || 0,
            todoCompleteCount: this.state.data.filter(function(item) {
                return item.complete === "true";
            }).length
        };
        return (
            <div className="well">
                <h1 className="text-center">React Todo</h1>
                <TodoList data={this.state.data}
                    deleteTask={this.handleTaskDelete}
                    toggleComplete={this.handleToggleComplete}
                    todoCount={statistics.todoCount}
                    todoCompleteCount={statistics.todoCompleteCount} />
                <TodoForm submitTask={this.handleSubmit} />
            </div>
        )
    };
});

var TodoList = React.createClass({
    render:function(){
        var tastList = this.props.data.map(function(listItem){
            return (
                <TodoItem
                    taskId = {listItem.id}
                    key={listItem.id}
                    task={listItem.task}
                    complete={listItem.complete}
                    deleteTask={this.props.deleteTask}
                    toggleComplete={this.props.toggleComplete} />
            )
        },this);
        return (
            <ul className='list-group'>
                {taskList}
                <TodoFooter todoCount={this.props.todoCount} todoCompleteCount={this.props.todoCompleteCount}>
            </ul>
        )
    }
});

var TodoItem = React.createClass({
    toggleComplete:function(){
        this.props.toggleComplete(this.props.taskId);
    },
    deleteTask:function(){
        this.props.deleteTask(this.props.taskId);
    },
    handleMouseOver:function(){
        ReactDOM.findDOMNode(this.refs.deleteBtn).style.display = 'inline';
    },
    handleMouseOut:function(){
        ReactDOM.findDOMNode(this.refs.deleteBtn).style.display = 'none';
    },
    render:function(){
        var task = this.props.task;
        var classes = 'list-group-item';
        var itemChecked;
        if(this.props.complete === 'true'){
            task = <s>{task}</s>
            itemChecked = true;
            classes += 'list-group-item-success'
        }else{
            itemChecked = false;
        };
        return (
            <li className={classes}
                onMouseOver = {this.handleMouseOver}
                onMouseOut = {this.handleMouseOut}>
                <input type='checkbox' checked={itemChecked} onChange={this.toggleComplete} className='pull-left'/>
                {task}
                <div class='pull-right'>
                    <button type='button' className='btn btn-xs close' onClick={this.deleteTask} ref='deleteBtn'>删除</button>
                </div>
            </li>
        );
    }
});

var TodoFooter = React.createClass({
  render: function() {
    return (
      <li className="list-group-item">{this.props.todoCompleteCount}已完成 / {this.props.todoCount}总数</li>
    )
  }
});


var TodoForm = React.createClass({
    submitTask:function(e){
        e.preventDefault();
        var task = ReactDOM.findDOMNode(this.refs.task).value.trim();
        if(!task){
            return;
        }
        this.props.submitTask(task);
        ReactDOM.findDOMNode(this.refs.task).value = '';
    },
    render:function(){
        return (
            <div>
                <hr />
                <form className='form-horizontal' onSubmit={this.submitTask}>
                    <div className='form-group'>
                        <label for='task' className='col-md-2 control-label'></label>
                        <div className='col-md-10'>
                            <input type='text' id='task' ref='task' className='form-control' placeholder='你想做点什么呢' />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-12 text-right'>
                            <input type='submit' value='Save Task' className='btn btn-primary'/>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
});

ReactDOM.render(
    <TodoBox />,
    document.getElementById('todoBox')
)
