#include <iostream>
#include <bitset>
#include <cstdint>
#include <algorithm>


void bitshift()
{
    uint32_t x = 1;
    
    for (int i = 0; i != 40; ++i)
    {
        std::cout << "1 << " << i << " = " << (x << i) << std::endl;
    }
}

void operation_order()
{
    int a = 0;

    std::cout << ++a << ++a << ++a << ++a << std::endl;
}

void out_of_bounds()
{
    uint8_t a = 0;
    uint8_t ns[] = { 1, 2, 3, 4 };
    uint8_t b = 0;

    for (int i = -10; i != 20; ++i)
    {
        ns[i]++;
    }

    
    std::cout << "a = " << int(a) << std::endl;
    std::cout << "b = " << int(b) << std::endl;

    auto pa = reinterpret_cast<uint64_t>(&a);
    auto pns = reinterpret_cast<uint64_t>(ns);
    auto pb =  reinterpret_cast<uint64_t>(&b);
    auto list = { pa, pns, pb };
    auto base = std::min(list);

    std::cout << "relative address of a  = " << (pa - base) << std::endl;
    std::cout << "relative address of ns = " << (pns - base) << std::endl;
    std::cout << "relative address of b  = " << (pb - base) << std::endl;
}

void casting()
{
    for (uint32_t n = 0; n <= 10; ++n)
    {
        auto x = *reinterpret_cast<float*>(&n);

        std::cout << n << " = " << std::bitset<32>(n) << " = " << x << std::endl;
    }
}

int main()
{
    //bitshift();
    //operation_order();
    //out_of_bounds();   // run in both x86 and x64
    casting();
}