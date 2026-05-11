export const ExpenseCompo = () => {
  return (
    <div className="flex flex-col items-center justify-center px-[50px]">
      <div className="flex w-full justify-around rounded-[61px] bg-[#014AFF] text-white">
        <p className="">항목</p>
        <p className="">|</p>
        <p className="">금액</p>
      </div>
      <table className="rounded-[20px]">
        <tbody>
          <tr>
            <th scope="row" className="bg-border-gray text-[#5E5E5E]">
              가맹비
            </th>
            <td>없음</td>
          </tr>
          <tr>
            <th scope="row">교육비</th>
            <td>없음</td>
          </tr>
          <tr>
            <th scope="row">보증금</th>
            <td>없음</td>
          </tr>
          <tr>
            <th scope="row">
              홈페이지
              <br className="md:hidden" /> 분양대금
            </th>
            <td>
              <div>
                <div>
                  <p className="w-full rounded-[9px] bg-[#014AFF]">분납</p>
                  <p className="w-full rounded-[9px] bg-[#E8EBFF]">
                    월 10만원
                    <span>(월납 24개월)</span>
                  </p>
                </div>
                <div>
                  <p className="w-full rounded-[9px] bg-[#014AFF]">일시불</p>
                  <p className="w-full rounded-[9px] bg-[#E8EBFF]">200만원</p>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">월 운영비</th>
            <td>없음</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
