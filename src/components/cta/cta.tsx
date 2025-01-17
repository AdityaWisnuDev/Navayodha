import { Button } from "../ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "../ui/card";

const CTA = () => {
    return (
        <Card className="w-full max-w-2xl mx-auto bg-gradient-to-r from-purple-500 to-pink-500 text-white">
            <CardHeader>
                <CardTitle className="text-3xl font-bold text-center">
                Wujudkan Acara Impian Anda Bersama Kami!
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-center text-lg mb-4">
                Kami adalah ahli dalam menciptakan momen tak terlupakan. Dari pernikahan hingga konferensi bisnis, kami siap menjadikan visi Anda kenyataan.
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Tim profesional berpengalaman</li>
                <li>Solusi kreatif dan inovatif</li>
                <li>Perhatian pada setiap detail</li>
                <li>Harga kompetitif</li>
                </ul>
            </CardContent>
            <CardFooter className="flex justify-center">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                Hubungi Kami Sekarang!
                </Button>
            </CardFooter>
        </Card>
    )
}

export default CTA;