import Image from "next/image";

const CategoryCard = ({item}) => {
    return (
        <article className="flex flex-col w-[182px]">
            <figure className="relative w-full h-[179px] rounded-xl overflow-hidden mb-5">
                <Image
                    src={'/assets/home/bromo.png'}
                    alt="Bromo"
                    fill
                    style={{ objectFit: "cover", objectPosition: 'center' }}
                />
            </figure>

            <p className="text-heading-3 text-gray-100 font-bold">
                {item.category_icon}
            </p>

        </article>
    )
}

export default CategoryCard