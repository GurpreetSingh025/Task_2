import "../Sass/ContentContainer.scss"
import RecordOverviewTable from "./RecordOverviewTable";
function ContentContainer() {
    let data1 = [
        {
            images: "img1.png",
            loanType: "Personal Loans",
            value: "$50,000"
        },
        {
            images: "img2.png",
            loanType: "Corporate Loans",
            value: "$100,000"
        },
        {
            images: "img3.png",
            loanType: "Business Loans",
            value: "$500,000"
        },
        {
            images: "img4.png",
            loanType: "Custom Loans",
            value: "Choose Money"
        }
    ]
    return (
        <div className="content-cont scrollVertical">
            <div className="content-block-cont">
                {
                    data1.map(obj => (
                        <div className="content-block">
                            <div className="content-block-img">
                                <img src={`./images/${obj.images}`} alt="block_img" />
                            </div>
                            <div className="content-block-info">
                                <div className="content-block-key">{obj.loanType}</div>
                                <div className="content-block-val">{obj.value}</div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <RecordOverviewTable/>
        </div>
    )
}
export default ContentContainer;