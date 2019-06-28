queue()
    .defer(d3.csv, "/data/sales.csv")
    .await(makeGraph);
    
function makeGraph(error, salesData){

    
}