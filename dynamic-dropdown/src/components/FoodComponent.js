const FoodComponent = ({foodName,image_url})=>{
    return (
        <div className='col-sm-4 col-lg-3'>
            <div className="card">
                <img src={image_url} alt={foodName} />
                <div className="card-body">
                  <p className="mb-0">
                    <strong>{foodName}</strong>
                    </p>
                </div>
            </div>
        </div>

    )

}
export default FoodComponent