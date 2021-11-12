<% _.forEach(config.projects, function(project){ %>import *
    as
    {
        {
            $$.toHump($$.convertUrl(project.name))
        }
    }
    from
    './{{project.name}}' < %
}
) %>

export {
<% _.forEach(config.projects, function(project, i){ %>
    {
        {
            $$.toHump($$.convertUrl(project.name))
        }
    }
    <% if(config.projects.length - 1 !== i) { %>,
        <%
    }
%><%
}
) %>
}
