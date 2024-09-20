import "../Sass/RecordOverviewTable.scss"
function RecordOverviewTable() {
    let data = {
        title: "Active Loans Overview",
        headingData:["SL No" , "Loan Money" , "Left to repay" , "Duration" , "Interest rate" , "Installment" , "Repay"] ,
        recordData: [
            {
                slNo: '01.',
                loanMoney: '$100,000',
                leftToRepay: '$40,500',
                duration: '8 Months',
                interestRate: '12%',
                installment: '$2,000 / month',
                repay: 'Repay',
              },
              {
                slNo: '02.',
                loanMoney: '$500,000',
                leftToRepay: '$250,000',
                duration: '36 Months',
                interestRate: '10%',
                installment: '$8,000 / month',
                repay: 'Repay',
              },
              {
                slNo: '03.',
                loanMoney: '$900,000',
                leftToRepay: '$40,500',
                duration: '12 Months',
                interestRate: '12%',
                installment: '$5,000/month',
                repay: 'Repay',
              },
              {
                slNo: '04.',
                loanMoney: '$50,000',
                leftToRepay: '$40,500',
                duration: '25 Months',
                interestRate: '5%',
                installment: '$2,000 / month',
                repay: 'Repay',
              },
              {
                slNo: '05.',
                loanMoney: '$50,000',
                leftToRepay: '$40,500',
                duration: '5 Months',
                interestRate: '16%',
                installment: '$10,000 / month',
                repay: 'Repay',
              },
              {
                slNo: '06.',
                loanMoney: '$80,000',
                leftToRepay: '$25,500',
                duration: '14 Months',
                interestRate: '8%',
                installment: '$2,000/month',
                repay: 'Repay',
              },
              {
                slNo: '07.',
                loanMoney: '$12,000',
                leftToRepay: '$5,500',
                duration: '9 Months',
                interestRate: '13%',
                installment: '$500/month',
                repay: 'Repay',
              },
              {
                slNo: '08.',
                loanMoney: '$160,000',
                leftToRepay: '$100,800',
                duration: '3 Months',
                interestRate: '12%',
                installment: '$900/month',
                repay: 'Repay',
              },
        ],
        resultData : [{
            slNo: 'Total',
            loanMoney: '$125,0000',
            leftToRepay: '$750,000',
            duration: '',
            interestRate: '',
            installment: '$50,000/month',
            repay: '',
        }]
    }

    return (
        <div className="record-overview-cont">
            <p className="record-table-title">Active Loans Overview</p>
            <table className="record-overview-table">
                <thead>
                    <tr>
                         {
                            data.headingData.map(val => <th>{val}</th>)
                         }
                    </tr>
                </thead>
                <tbody>
                    {data.recordData.map((item, index) => (
                        <tr key={index}>
                            <td>{item.slNo}</td>
                            <td>{item.loanMoney}</td>
                            <td>{item.leftToRepay}</td>
                            <td>{item.duration}</td>
                            <td>{item.interestRate}</td>
                            <td>{item.installment}</td>
                            <td>
                                <button className="repay-button cp">{item.repay}</button>
                            </td>
                        </tr>
                    ))}
                    <tr className="result-row">
                        {
                           Object.values(data.resultData[0]).map(val => <td><span className="total-amount">{val}</span></td>)   
                        }
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default RecordOverviewTable;