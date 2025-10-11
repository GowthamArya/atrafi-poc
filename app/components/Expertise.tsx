import React from 'react'

export const Expertise = () => {
  return (
    <section className="grid md:grid-cols-2 gap-6">
        <div className="w-full">
          <img src={"https://img1.wsimg.com/isteam/ip/ec31fc0e-619a-46bc-9b53-b20f5f0533c2/ATRAFI1.jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1160,h:871"} alt=''/>
        </div>
        <div className="w-full mt-5">
          <h1 className="text-2xl md:text-5xl font-bold text-blue-400 text-center">
            مركز أطرافي الطبي للأطراف الصناعية والأجهزة التقويمية للكبار
          </h1>
          <p className="w-full text-center text-lg text-blue-950">
            يعمل مركز أطرافي بالتعاون مع الأطباء والمعالجين وغيرهم من المتخصصين في الرعاية الصحية لخدمة المرضى الأطفال والبالغين والمسنين. من خلال شراكتنا مع شركات رائدة في مجال تصنيع أجهزة تقويم العظام والأطراف الصناعية ، فإننا نقدم مجموعة كاملة من الخدمات المتخصصة لتلبية احتياجات مرضانا
          </p>
        </div>
    </section>
  )
}
