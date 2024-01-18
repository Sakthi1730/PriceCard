function Card(props) {
    return (
      
       <div class="col" style={{textAlign:"center"}}>
        <div class="card mb-4 shadow-sm">
        <div class="card-header">
          <h4 class="my-0 font-weight-normal">{props.data.planName}</h4>
        </div>
        <div class="card-body">
          <h1 class="card-title pricing-card-title">{props.data.price} <small class="text-muted"></small></h1>
          <ul class="list-unstyled mt-3 mb-4">
            <li>{props.data.user}</li>
            <li>{props.data.Storage}</li>
            <li>{props.data.Project}</li>
            <li>{props.data.Access}</li>
            <li>{props.data.Report}</li>
            
          </ul>
          <button type="button" class="btn btn-lg btn-block btn-outline-primary">Button</button>
        </div>
      </div>
      </div>
    )
}
export default Card;