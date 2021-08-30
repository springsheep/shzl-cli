/**
 * {{data.project.name}}模块api,此代码自动生成，如需更改，改模版即可
 */
import instance from './instance'
import {convertRESTAPI} from '{{$$.relative("util")}}'

<%_.forEach(data.mocks, function (mock) { %>

    /**
     * {{mock.description}}
     * <% if(mock.method === 'post' || mock.method === 'put'){%>@params data 业务参数<%} else {%>@params params 业务参数<% } %>
     * @params opts 请求参数配置，可空
     */
    function {{$$.convertMethod(mock)}}(<% if(mock.method === 'post' || mock.method === 'put'){%>data, opts = {}<%}else{%>params, opts = {}<%}%>){
        return instance({
            method: '{{mock.method}}',
            url: <% if($$.isREST(mock.url)) {%>
            convertRESTAPI('{{mock.url}}', opts) <%
        }
        else
        {%>
            '{{mock.url}}' <%
        }
    %>,
        opts: <% if(mock.method === 'post' || mock.method === 'put') {%>
            Object.assign({headers: {'Content-Type': 'application/json;charset=UTF-8'}}, {data}, opts) <%
        }
        else
        {%>
            Object.assign({params}, opts) <%
        }
    %>
    })
    }

    <%
}) %>
export {<% _.forEach(data.mocks, function(mock, i){ %>
    {{$$.convertMethod(mock)}}<% if(data.mocks.length - 1 !== i) { %>,<% } %><% }) %>
}
